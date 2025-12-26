/**
 * Get parent path from current path
 * @param {string} path - Current path
 * @returns {string} Parent path
 */
export function getParentPath(path) {
  if (!path) return '';
  const parts = path.split('/');
  parts.pop();
  return parts.join('/');
}

/**
 * Check if path is root
 * @param {string} path
 * @returns {boolean}
 */
export function isRoot(path) {
  return !path || path === '';
}

/**
 * Get breadcrumb from path
 * @param {string} path
 * @returns {Array} Breadcrumb items
 */
export function getBreadcrumb(path) {
  if (!path) return [{ name: 'world', path: '' }];
  const parts = path.split('/');
  const breadcrumb = [{ name: 'world', path: '' }];
  let currentPath = '';
  for (const part of parts) {
    currentPath += (currentPath ? '/' : '') + part;
    breadcrumb.push({ name: part, path: currentPath });
  }
  return breadcrumb;
}