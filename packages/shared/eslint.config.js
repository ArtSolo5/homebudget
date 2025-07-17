import tseslint from '@typescript-eslint/eslint-plugin';
import parser from '@typescript-eslint/parser';
import path from 'node:path';
import { getDirname } from './src/utils/meta.ts';

const __dirname = getDirname(import.meta.url);

export default {
  files: ['packages/shared/**/*.ts'],
  ignores: ['packages/shared/dist/**', 'packages/shared/node_modules/**'],
  languageOptions: {
    parser,
    parserOptions: {
      project: path.resolve(__dirname, 'tsconfig.json'),
    },
  },
  plugins: {
    '@typescript-eslint': tseslint,
  },
  rules: {
    ...tseslint.configs.recommended.rules,
  },
};
