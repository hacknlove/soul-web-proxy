export const prerender = false;

import { readDirectory } from '../../../lib/fileReader.js';
import { parseWorldStructure } from '../../../lib/dataParser.js';
import { worldRoot } from '../../../lib/worldPath.js';
import { readdir, stat, readFile } from 'fs/promises';
import { join, extname } from 'path';

export async function GET({ params }) {
  try {
    const rel = params.path || '';
    // Read directory under WORLD_PATH root
    const root = worldRoot();
    const dirPath = join(root, rel);
    const entries = await readdir(dirPath);
    const items = [];
    for (const entry of entries) {
      const entryPath = join(dirPath, entry);
      const stats = await stat(entryPath);
      if (stats.isDirectory()) {
        items.push({ name: entry, path: `${rel ? rel + '/' : ''}${entry}`, type: 'directory' });
      } else {
        const content = await readFile(entryPath, 'utf-8');
        items.push({
          name: entry,
          path: `${rel ? rel + '/' : ''}${entry}`,
          type: 'file',
          extension: extname(entry),
          content
        });
      }
    }
    const structure = parseWorldStructure(items);

    return new Response(JSON.stringify(structure), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Path not found' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}