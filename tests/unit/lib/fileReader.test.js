import { describe, it, expect } from 'vitest';
import { readMemories, readInternalState } from '../../../src/lib/fileReader.js';

describe('fileReader', () => {
  it('should read memories', async () => {
    const memories = await readMemories();

    expect(memories.length).toBeGreaterThan(0);
    expect(memories[0]).toHaveProperty('id');
    expect(memories[0]).toHaveProperty('title');
    expect(memories[0]).toHaveProperty('content');
    expect(memories[0]).toHaveProperty('date');
  });

  it('should read internal state', async () => {
    const state = await readInternalState();

    expect(state).toHaveProperty('memory');
    expect(state).toHaveProperty('emotions');
    expect(state).toHaveProperty('thoughts');
    expect(state).toHaveProperty('timestamp');
    expect(typeof state.memory).toBe('string');
    expect(typeof state.emotions).toBe('string');
    expect(typeof state.thoughts).toBe('string');
  });
});