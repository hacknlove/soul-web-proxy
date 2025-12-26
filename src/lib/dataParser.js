/**
 * Parse memory content (simple, since only filename trusted)
 * @param {string} content - Raw markdown content
 * @returns {Object} Parsed memory data
 */
export function parseMemory(content) {
  // Since only filename is trusted, just return content as is
  return {
    rawContent: content
  };
}

/**
 * Parse world structure into navigation tree
 * @param {Array} items - Directory items
 * @returns {Object} Navigation structure
 */
export function parseWorldStructure(items) {
  return items.map(item => ({
    name: item.name,
    path: item.path,
    type: item.type,
    children: item.children || []
  }));
}

/**
 * Parse state text (no special parsing needed)
 * @param {string} text - Raw state text
 * @returns {string} Cleaned text
 */
export function parseStateText(text) {
  return text.trim();
}