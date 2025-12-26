import { describe, it, expect } from 'vitest';
import { getParentPath, isRoot, getBreadcrumb } from '../../../src/lib/worldNav.js';

describe('worldNav', () => {
  it('should get parent path', () => {
    expect(getParentPath('actionable')).toBe('');
    expect(getParentPath('actionable/subdir')).toBe('actionable');
    expect(getParentPath('')).toBe('');
  });

  it('should check if root', () => {
    expect(isRoot('')).toBe(true);
    expect(isRoot('actionable')).toBe(false);
  });

  it('should get breadcrumb', () => {
    expect(getBreadcrumb('')).toEqual([{ name: 'world', path: '' }]);
    expect(getBreadcrumb('actionable')).toEqual([
      { name: 'world', path: '' },
      { name: 'actionable', path: 'actionable' }
    ]);
  });
});