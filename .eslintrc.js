export default {
    parser: '@babel/eslint-parser',
    parserOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
    env: {
      browser: true,
      es2021: true,
      node: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
    ],
    plugins: ['react', 'react-hooks'],
    rules: {
      'no-console': 'warn',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  };