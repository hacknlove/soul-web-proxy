import { readInternalState } from '../../lib/fileReader.js';

export async function GET() {
  try {
    const state = await readInternalState();
    return new Response(JSON.stringify(state), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to load state' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}