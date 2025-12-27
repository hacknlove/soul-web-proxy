import { readFile, writeFile } from '../../../../lib/fileSystem.js';
import { resolveWorldPath } from '../../../../lib/worldPath.js';
export const prerender = false;

export async function GET({ params }) {
  const filePath = Array.isArray(params.path) ? params.path.join('/') : params.path;
  try {
    const absPath = resolveWorldPath(filePath);
    const fileData = await readFile(absPath);
    return new Response(JSON.stringify(fileData), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message, path: filePath }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export async function PUT({ params, request }) {
  const filePath = Array.isArray(params.path) ? params.path.join('/') : params.path;
  try {
    const body = await request.json();
    const { content } = body;
    const absPath = resolveWorldPath(filePath);
    await writeFile(absPath, content);
    return new Response(JSON.stringify({ success: true }), {
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
