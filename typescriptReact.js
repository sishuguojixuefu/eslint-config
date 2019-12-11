const reactConfig = require('./config/react.config')
const typescriptConfig = require('./config/typescript.config')

module.exports = {
  files: ['*.tsx'],
  env: {
    'react-native/react-native': true,
  },
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-native/all',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {},
    },
  },
  rules: {
    ...reactConfig,
    ...typescriptConfig,
  },
}
