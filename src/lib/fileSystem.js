import fs from 'fs';
import path from 'path';

export async function listFiles(dirPath) {
  try {
    const items = await fs.promises.readdir(dirPath, { withFileTypes: true });
    const files = [];
    for (const item of items) {
      const fullPath = path.join(dirPath, item.name);
      const stats = await fs.promises.stat(fullPath);
      files.push({
        name: item.name,
        path: fullPath,
        type: item.isDirectory() ? 'folder' : 'file',
        size: stats.size,
        modified: stats.mtime.toISOString(),
      });
    }
    return files;
  } catch (error) {
    throw new Error(`Failed to list files in ${dirPath}: ${error.message}`);
  }
}

export async function readFile(filePath) {
  try {
    const content = await fs.promises.readFile(filePath, 'utf-8');
    const stats = await fs.promises.stat(filePath);
    return {
      content,
      size: stats.size,
      modified: stats.mtime.toISOString(),
    };
  } catch (error) {
    throw new Error(`Failed to read file ${filePath}: ${error.message}`);
  }
}

export async function writeFile(filePath, content) {
  try {
    await fs.promises.writeFile(filePath, content, 'utf-8');
  } catch (error) {
    throw new Error(`Failed to write file ${filePath}: ${error.message}`);
  }
}

export async function createFile(filePath, content = '') {
  try {
    await fs.promises.writeFile(filePath, content, 'utf-8');
  } catch (error) {
    throw new Error(`Failed to create file ${filePath}: ${error.message}`);
  }
}

export async function copyFile(srcPath, destPath) {
  try {
    await fs.promises.copyFile(srcPath, destPath);
  } catch (error) {
    throw new Error(
      `Failed to copy file from ${srcPath} to ${destPath}: ${error.message}`
    );
  }
}

export async function deleteFile(filePath) {
  try {
    await fs.promises.unlink(filePath);
  } catch (error) {
    throw new Error(`Failed to delete file ${filePath}: ${error.message}`);
  }
}

export async function createDir(dirPath) {
  try {
    await fs.promises.mkdir(dirPath, { recursive: true });
  } catch (error) {
    throw new Error(`Failed to create directory ${dirPath}: ${error.message}`);
  }
}
