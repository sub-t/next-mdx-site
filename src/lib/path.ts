import path from 'path';

export const resolvePath = (...paths: string[]) =>
  path.resolve(...paths).replaceAll('\\', '/');

const ROOT_PATH = resolvePath(process.cwd());
export const DATA_PATH = resolvePath(ROOT_PATH, 'data');