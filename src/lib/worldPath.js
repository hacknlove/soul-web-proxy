import path from 'node:path';
import { env as astroEnv } from 'astro:env/server';

const DEFAULT_WORLD_PATH = 'entity/world';

export function worldRoot() {
  const root = (astroEnv?.WORLD_PATH) || process.env.WORLD_PATH || DEFAULT_WORLD_PATH;
  return path.resolve(root);
}

export function resolveWorldPath(relative = '') {
  const root = worldRoot();
  const rel = normalizeRelative(relative);
  const resolved = path.resolve(root, rel);
  // Ensure resolved path is within root (prevent traversal)
  if (resolved !== root && !resolved.startsWith(root + path.sep)) {
    throw new Error('Invalid path');
  }
  return resolved;
}

function normalizeRelative(rel) {
  if (!rel || rel === '.' || rel === './') return '';
  // Strip legacy 'world' prefix if present
  if (rel === 'world') return '';
  if (rel.startsWith('world/')) return rel.slice('world/'.length);
  return rel;
}