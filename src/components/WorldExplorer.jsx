import React, { useState } from 'react';
import FileTree from './FileTree';
import FileTab from './FileTab';
import FileEditor from './FileEditor';
import ImageViewer from './ImageViewer';

export default function WorldExplorer({ path }) {
  const [openFiles, setOpenFiles] = useState([]);
  const [activeFile, setActiveFile] = useState(null);

  const handleFileSelect = async (file) => {
    if (openFiles.find((f) => f.path === file.path)) {
      setActiveFile(file);
      return;
    }

    try {
      const response = await fetch(
        `/api/world/files/${file.path}`
      );
      const data = await response.json();
      const fileWithContent = { ...file, content: data.content };
      setOpenFiles((prev) => [...prev, fileWithContent]);
      setActiveFile(fileWithContent);
    } catch (error) {
      console.error('Failed to open file:', error);
    }
  };

  const handleTabClick = (file) => {
    setActiveFile(file);
  };

  const handleTabClose = (file) => {
    const newOpenFiles = openFiles.filter((f) => f.path !== file.path);
    setOpenFiles(newOpenFiles);
    if (activeFile?.path === file.path) {
      setActiveFile(newOpenFiles[0] || null);
    }
  };

  const [unsavedPaths, setUnsavedPaths] = useState(new Set());
  const handleFileChange = (path, content) => {
    // Update local state immediately
    setOpenFiles((prev) =>
      prev.map((f) => (f.path === path ? { ...f, content } : f))
    );
    if (activeFile?.path === path) {
      setActiveFile({ ...activeFile, content });
    }
    setUnsavedPaths((prev) => new Set(prev).add(path));
  };

  const handleSave = async () => {
    if (!activeFile || !unsavedPaths.has(activeFile.path)) return;

    try {
      await fetch(`/api/world/files/${activeFile.path}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: activeFile.content }),
      });
      setUnsavedPaths((prev) => {
        const next = new Set(prev);
        next.delete(activeFile.path);
        return next;
      });
    } catch (error) {
      console.error('Failed to save file:', error);
    }
  };

  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault();
        handleSave();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeFile, unsavedPaths]);

  const renderContent = () => {
    if (!activeFile) return <div>Select a file to view</div>;

    if (
      activeFile.type === 'file' &&
      activeFile.name.match(/\.(jpg|png|gif|svg)$/i)
    ) {
      return <ImageViewer file={activeFile} />;
    } else {
      return <FileEditor file={activeFile} onChange={handleFileChange} onSave={handleSave} />;
    }
  };

  return (
    <div className="h-screen flex bg-gray-50 overflow-hidden">
      <aside className="w-64 bg-white border-r flex flex-col">
        <FileTree rootPath={path} onFileSelect={handleFileSelect} />
      </aside>

      <main className="flex-1 flex flex-col min-w-0 bg-[#fffffe]">
        {openFiles.length > 0 && (
          <div id="file-tabs" className="bg-[#f3f3f3] flex justify-between items-center border-b pr-2">
            <div className="flex overflow-x-auto no-scrollbar">
              {openFiles.map((file) => (
                <FileTab
                  key={file.path}
                  file={file}
                  isActive={activeFile?.path === file.path}
                  isDirty={unsavedPaths.has(file.path)}
                  onClick={handleTabClick}
                  onClose={handleTabClose}
                />
              ))}
            </div>
            {activeFile && (
              <button
                onClick={handleSave}
                disabled={!unsavedPaths.has(activeFile.path)}
                className={`ml-4 px-3 py-1 rounded text-xs font-medium transition-colors ${unsavedPaths.has(activeFile.path)
                  ? 'bg-[#007acc] text-white hover:bg-[#0062a3]'
                  : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  }`}
              >
                Save
              </button>
            )}
          </div>
        )}

        <div id="file-content" className="flex-1 relative">
          <div className="absolute inset-0">
            {renderContent()}
          </div>
        </div>
      </main>
    </div>
  );
}
