import { copyFile } from '../../../lib/fileSystem.js';
import { resolveWorldPath } from '../../../lib/worldPath.js';
export const prerender = false;

export async function POST({ request }) {
  try {
    const body = await request.json();
    const { sourcePath, targetPath } = body;
    const src = resolveWorldPath(sourcePath);
    const dest = resolveWorldPath(targetPath);
    await copyFile(src, dest);
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
