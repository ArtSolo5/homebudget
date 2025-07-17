import { fileURLToPath } from 'node:url';
import path from 'node:path';

/**
 * Converts a `meta.url` to a file path.
 */
function getFilename(metaUrl: string): string {
  return fileURLToPath(metaUrl);
}

/**
 * Returns the directory name of a given `meta.url`.
 */
function getDirname(metaUrl: string): string {
  return path.dirname(getFilename(metaUrl));
}

export { getFilename, getDirname };
