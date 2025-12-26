export const prerender = false;

import { readDirectory } from '../../../lib/fileReader.js';
import { parseWorldStructure } from '../../../lib/dataParser.js';

export async function GET({ params }) {
  try {
    const path = params.path || '';
    const items = await readDirectory(`world/${path}`);
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