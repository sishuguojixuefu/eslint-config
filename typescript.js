const typescriptConfig = require('./config/typescript.config')

module.exports = {
  files: ['*.ts'],
  extends: ['plugin:@typescript-eslint/recommended', 'prettier', 'prettier/@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  rules: {
    ...typescriptConfig,
  },
}
