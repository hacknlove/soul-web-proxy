import { readdir, readFile, stat } from 'fs/promises';
import { join, extname } from 'path';

const ENTITY_FOLDER = process.env.ENTITY_FOLDER_PATH || './entity';

/**
 * Recursively read directory and return file structure
 * @param {string} dirPath - Directory path relative to entity/
 * @returns {Promise<Array>} Array of file objects with path, name, type, content
 */
export async function readDirectory(dirPath) {
  const fullPath = join(ENTITY_FOLDER, dirPath);
  const items = [];

  try {
    const entries = await readdir(fullPath);

    for (const entry of entries) {
      const entryPath = join(fullPath, entry);
      const stats = await stat(entryPath);

      if (stats.isDirectory()) {
        const subItems = await readDirectory(join(dirPath, entry));
        items.push({
          name: entry,
          path: join(dirPath, entry),
          type: 'directory',
          children: subItems
        });
      } else {
        const content = await readFile(entryPath, 'utf-8');
        items.push({
          name: entry,
          path: join(dirPath, entry),
          type: 'file',
          extension: extname(entry),
          content
        });
      }
    }
  } catch (error) {
    console.error(`Error reading directory ${fullPath}:`, error);
    throw error;
  }

  return items;
}

/**
 * Read memories from entity/memory/
 * @returns {Promise<Array>} Array of memory objects
 */
export async function readMemories() {
  const memories = await readDirectory('memory');
  return memories
    .filter(item => item.type === 'file' && item.extension === '.md')
    .map(item => ({
      id: item.name.replace('.md', ''),
      title: item.name.replace('.md', '').replace(/-/g, ' '),
      content: item.content,
      date: extractDateFromFilename(item.name)
    }));
}

/**
 * Read internal state from entity/state/
 * @returns {Promise<Object>} State object
 */
export async function readInternalState() {
  const stateFiles = await readDirectory('state');
  const state = {};

  for (const file of stateFiles) {
    if (file.type === 'file' && file.extension === '.md') {
      const key = file.name.replace('.md', '').replace(/-/g, '');
      state[key] = file.content;
    }
  }

  return {
    memory: state.shorttermmemory || '',
    emotions: state.shorttermmemotions || '',
    thoughts: state.thoughts || '',
    timestamp: new Date().toISOString()
  };
}

/**
 * Extract date from filename like 2025-12-24T12:18:55+01:00-title.md
 */
function extractDateFromFilename(filename) {
  const match = filename.match(/^(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}[+-]\d{2}:\d{2})/);
  return match ? match[1] : null;
}