import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import FileTree from '../../../src/components/FileTree.jsx';

// Mock the file system functions
vi.mock('../../../src/lib/fileSystem.js', () => ({
  listFiles: vi.fn(),
}));

describe('FileTree', () => {
  beforeEach(() => {
    global.fetch = vi.fn();
  });
  it('renders create button', async () => {
    const mockFiles = [
      { name: 'folder1', path: '/world/folder1', type: 'folder' },
    ];
    global.fetch.mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ items: mockFiles }),
    });

    render(<FileTree rootPath="/world" />);

    const createButton = screen.getByText('Create File');
    expect(createButton).toBeInTheDocument();
  });

  it('creates new file when create button is clicked', async () => {
    const mockFiles = [];
    global.fetch.mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ items: mockFiles }),
    });
    const promptSpy = vi.fn(() => 'newfile.txt');
    vi.stubGlobal('prompt', promptSpy);
    global.fetch
      .mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve({ items: mockFiles }),
      })
      .mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve({ success: true }),
      });

    render(<FileTree rootPath="/world" />);

    const createButton = screen.getByText('Create File');
    fireEvent.click(createButton);

    expect(promptSpy).toHaveBeenCalled();
  });
});
