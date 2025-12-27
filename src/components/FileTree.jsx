import React, { useState, useEffect } from 'react';

export default function FileTree({ rootPath, onFileSelect }) {
  const [files, setFiles] = useState([]);
  const [expandedFolders, setExpandedFolders] = useState(new Set());
  const [folderContents, setFolderContents] = useState({});
  const [dragOver, setDragOver] = useState(null);

  useEffect(() => {
    fetchFiles();
  }, [rootPath]);

  const fetchFiles = async () => {
    try {
      const response = await fetch(`/api/world/files?path=${rootPath}`);
      const data = await response.json();
      setFiles(data.items || []);
    } catch (error) {
      console.error('Failed to fetch files:', error);
    }
  };

  const toggleFolder = async (folderPath) => {
    const newExpanded = new Set(expandedFolders);
    if (newExpanded.has(folderPath)) {
      newExpanded.delete(folderPath);
    } else {
      newExpanded.add(folderPath);
      // Fetch sub-files if not already fetched
      if (!folderContents[folderPath]) {
        try {
          const response = await fetch(`/api/world/files?path=${folderPath}`);
          const data = await response.json();
          setFolderContents((prev) => ({
            ...prev,
            [folderPath]: data.items || [],
          }));
        } catch (error) {
          console.error('Failed to fetch folder contents:', error);
        }
      }
    }
    setExpandedFolders(newExpanded);
  };

  const handleItemClick = (item) => {
    if (item.type === 'folder') {
      toggleFolder(item.path);
    } else {
      onFileSelect?.(item);
    }
  };

  const handleCreateFile = async () => {
    const fileName = prompt('Enter file name:');
    if (fileName) {
      try {
        await fetch('/api/world/files', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            path: `${rootPath}/${fileName}`,
            content: '',
          }),
        });
        fetchFiles(); // Refresh
      } catch (error) {
        console.error('Failed to create file:', error);
      }
    }
  };

  const handleDragOver = (e, item) => {
    e.preventDefault();
    if (item.type === 'folder') {
      setDragOver(item.path);
    }
  };

  const handleDragLeave = () => {
    setDragOver(null);
  };

  const handleDrop = async (e, item) => {
    e.preventDefault();
    setDragOver(null);
    if (item.type !== 'folder') return;

    const files = Array.from(e.dataTransfer.files);
    for (const file of files) {
      const reader = new FileReader();
      reader.onload = async () => {
        try {
          await fetch('/api/world/files/copy', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              sourcePath: file.name, // Simplified, in real might need full path
              targetPath: `${item.path}/${file.name}`,
            }),
          });
          fetchFiles(); // Refresh
        } catch (error) {
          console.error('Failed to copy file:', error);
        }
      };
      reader.readAsDataURL(file); // For images, etc.
    }
  };

  const renderItem = (item, level = 0) => {
    const isExpanded = expandedFolders.has(item.path);
    const isDragOver = dragOver === item.path;
    const children = folderContents[item.path] || [];
    return (
      <li key={item.path} style={{ listStyleType: 'none' }}>
        <div
          onDragOver={(e) => handleDragOver(e, item)}
          onDragLeave={handleDragLeave}
          onDrop={(e) => handleDrop(e, item)}
          className={`flex items-center transition-colors duration-150 ${isDragOver ? 'bg-blue-100/50' : 'hover:bg-gray-100/80'
            } rounded-sm group`}
          style={{ paddingLeft: `${level * 12 + 8}px` }}
        >
          <button
            onClick={() => handleItemClick(item)}
            className="flex items-center flex-1 py-1 text-sm text-gray-700 select-none outline-none focus:bg-blue-50"
          >
            <span className="w-5 h-5 flex items-center justify-center mr-1 text-lg">
              {item.type === 'folder' ? (isExpanded ? '📂' : '📁') : '📄'}
            </span>
            <span className="truncate">{item.name}</span>
          </button>
        </div>
        {item.type === 'folder' && isExpanded && (
          <ul className="list-none p-0 m-0">
            {children.map((child) => renderItem(child, level + 1))}
          </ul>
        )}
      </li>
    );
  };

  return (
    <div className="flex flex-col h-full bg-white select-none">
      <div className="p-2 border-b flex justify-between items-center bg-gray-50/50">
        <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500">Explorer</span>
        <button
          onClick={handleCreateFile}
          className="p-1 hover:bg-gray-200 rounded text-gray-600 transition-colors"
          title="New File"
        >
          <span className="text-lg">➕</span>
        </button>
      </div>
      <ul className="list-none p-0 m-0 overflow-y-auto">
        {files.map((item) => renderItem(item, 0))}
      </ul>
    </div>
  );
}
