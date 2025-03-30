import pluginJs from '@eslint/js';
import typescriptParser from '@typescript-eslint/parser';
import prettierPluginRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';

import defaultConfig from './eslint/default.mjs';
import importConfig from './eslint/import.mjs';
import reactConfig from './eslint/react.mjs';
import tsConfig from './eslint/typescript.mjs';

export default [
  {
    ignores: ['eslint.config.mjs', 'eslint/**/*.mjs', 'prettier.config.mjs', 'prettier/**/*.mjs'],
  },
  {
    files: ['src/**/*.{js,mjs,cjs,ts,jsx,tsx}'], // src 폴더 내 코드 파일만 검사
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...globals.node,
      },
      parser: typescriptParser,
      parserOptions: {
        project: ['./tsconfig.app.json', './tsconfig.node.json'],
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    rules: {
      'prettier/prettier': 'warn',
    },
  },
  tsConfig,
  pluginJs.configs.recommended,
  defaultConfig,
  importConfig,
  reactConfig,
  prettierPluginRecommended,
];
