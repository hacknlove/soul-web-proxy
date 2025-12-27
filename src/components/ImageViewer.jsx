import React from 'react';

export default function ImageViewer({ file }) {
  // For simplicity, assume content is base64 or path
  // In real, might need to handle differently
  return (
    <div className="h-full flex items-center justify-center">
      <img
        src={`data:image/*;base64,${file.content}`}
        alt={file.name}
        className="max-w-full max-h-full"
      />
    </div>
  );
}
