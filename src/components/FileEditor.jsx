import React from 'react';
import Editor from '@monaco-editor/react';

export default function FileEditor({ file, onChange, onSave }) {
  const handleChange = (value) => {
    onChange(file.path, value);
  };

  const handleEditorDidMount = (editor, monaco) => {
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS, () => {
      onSave?.();
    });
  };

  return (
    <div className="h-full">
      <Editor
        height="100%"
        language={getLanguageFromFile(file.name)}
        value={file.content || ''}
        onChange={handleChange}
        onMount={handleEditorDidMount}
        theme="vs-light"
        options={{
          minimap: { enabled: false },
          fontSize: 14,
        }}
      />
    </div>
  );
}

function getLanguageFromFile(filename) {
  const ext = filename.split('.').pop().toLowerCase();
  const langMap = {
    js: 'javascript',
    jsx: 'javascript',
    ts: 'typescript',
    tsx: 'typescript',
    py: 'python',
    json: 'json',
    md: 'markdown',
    css: 'css',
    html: 'html',
  };
  return langMap[ext] || 'plaintext';
}
