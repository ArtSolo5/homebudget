import tseslint from '@typescript-eslint/eslint-plugin';
import parser from '@typescript-eslint/parser';
import prettier from 'eslint-config-prettier';

export default [
  {
    files: ['apps/backend/**/*.ts'],
    ignores: ['apps/backend/dist/**', 'apps/backend/node_modules/**'],
    languageOptions: {
      parser,
      parserOptions: {
        project: './apps/backend/tsconfig.json',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
    },
  },
  {
    files: ['packages/shared/**/*.ts'],
    ignores: ['packages/shared/dist/**', 'packages/shared/node_modules/**'],
    languageOptions: {
      parser,
      parserOptions: {
        project: './packages/shared/tsconfig.json',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
    },
  },
  prettier,
];
