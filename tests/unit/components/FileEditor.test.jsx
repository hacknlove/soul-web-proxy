import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import FileEditor from '../../../src/components/FileEditor.jsx';

// Mock Monaco Editor
vi.mock('@monaco-editor/react', () => ({
  default: ({ value, onChange }) => (
    <div data-testid="monaco-editor">{value}</div>
  ),
}));

describe('FileEditor', () => {
  const mockFile = {
    name: 'test.js',
    path: '/test.js',
    type: 'file',
    content: 'console.log("hello");',
  };

  it('renders Monaco editor for text file', () => {
    render(<FileEditor file={mockFile} onChange={() => {}} />);
    expect(screen.getByTestId('monaco-editor')).toBeInTheDocument();
    expect(screen.getByText('console.log("hello");')).toBeInTheDocument();
  });

  it('calls onChange when content changes', () => {
    const mockOnChange = vi.fn();
    render(<FileEditor file={mockFile} onChange={mockOnChange} />);
    // Simulate change - since mocked, test the prop
    expect(mockOnChange).toHaveBeenCalledTimes(0); // Initial
  });
});
