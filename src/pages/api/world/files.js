import { listFiles, createFile, createDir } from '../../../lib/fileSystem.js';
import { resolveWorldPath } from '../../../lib/worldPath.js';
import { worldRoot } from '../../../lib/worldPath.js';
import path from 'node:path';
export const prerender = false;

export async function GET({ request }) {
  const url = new URL(request.url);
  const pathParam = url.searchParams.get('path') || '.';
  try {
    const dirPath = resolveWorldPath(pathParam);
    const root = worldRoot();
    const files = await listFiles(dirPath);
    const items = files.map((f) => ({
      ...f,
      path: path.relative(root, f.path) || '',
    }));
    return new Response(JSON.stringify({ items }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export async function POST({ request }) {
  try {
    const body = await request.json();
    const { path: filePath, content = '', type = 'file' } = body;
    if (type === 'folder') {
      await createDir(resolveWorldPath(filePath));
    } else {
      await createFile(resolveWorldPath(filePath), content);
    }
    return new Response(JSON.stringify({ success: true }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
