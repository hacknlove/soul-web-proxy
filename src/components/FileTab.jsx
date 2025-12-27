import React from 'react';

export default function FileTab({ file, isActive, isDirty, onClick, onClose }) {
  return (
    <div
      className={`group relative flex items-center min-w-[120px] max-w-[200px] px-3 py-2 border-r border-[#e5e5e5] cursor-pointer select-none transition-colors duration-150 ${isActive ? 'bg-[#fffffe] border-b-transparent' : 'bg-[#ececec] hover:bg-[#e8e8e8]'
        }`}
      onClick={() => onClick(file)}
      title={file.path}
    >
      <span className="mr-2 text-xs">
        {file.name.match(/\.(jpg|png|gif|svg)$/i) ? '🖼️' : '📄'}
      </span>
      <span className={`flex-1 truncate text-xs ${isActive ? 'text-[#333]' : 'text-[#616161]'}`}>
        {file.name}
      </span>
      <div className="ml-2 w-4 h-4 flex items-center justify-center relative">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClose(file);
          }}
          className={`p-0.5 rounded-sm transition-opacity ${isActive && !isDirty ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} hover:bg-[#d1d1d1]`}
        >
          <span className="text-sm leading-none block w-3 h-3 flex items-center justify-center">×</span>
        </button>
        {isDirty && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:opacity-0 transition-opacity">
            <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
          </div>
        )}
      </div>
      {isActive && (
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#007acc]"></div>
      )}
    </div>
  );
}
