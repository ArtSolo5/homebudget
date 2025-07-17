import prettier from 'eslint-config-prettier';
import backendConfig from './apps/backend/eslint.config.js';
import sharedPkgConfig from './packages/shared/eslint.config.js';

export default [backendConfig, sharedPkgConfig, prettier];
