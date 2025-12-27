import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import FileTab from '../../../src/components/FileTab.jsx';

describe('FileTab', () => {
  const mockFile = { name: 'test.txt', path: '/test.txt', type: 'file' };

  it('renders tab with file name', () => {
    render(
      <FileTab
        file={mockFile}
        isActive={false}
        onClick={() => {}}
        onClose={() => {}}
      />
    );
    expect(screen.getByText('test.txt')).toBeInTheDocument();
  });

  it('calls onClick when tab is clicked', () => {
    const mockOnClick = vi.fn();
    render(
      <FileTab
        file={mockFile}
        isActive={false}
        onClick={mockOnClick}
        onClose={() => {}}
      />
    );
    fireEvent.click(screen.getByText('test.txt'));
    expect(mockOnClick).toHaveBeenCalledWith(mockFile);
  });

  it('shows close button', () => {
    const mockOnClose = vi.fn();
    render(
      <FileTab
        file={mockFile}
        isActive={false}
        onClick={() => {}}
        onClose={mockOnClose}
      />
    );
    const closeButton = screen.getByText('×');
    fireEvent.click(closeButton);
    expect(mockOnClose).toHaveBeenCalledWith(mockFile);
  });
});
