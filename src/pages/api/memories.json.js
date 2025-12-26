import { readMemories } from '../../lib/fileReader.js';

export async function GET() {
  try {
    const memories = await readMemories();
    return new Response(JSON.stringify(memories), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to load memories' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}