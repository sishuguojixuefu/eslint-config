const typescriptConfig = require('./rules/typescript.rule.js')

module.exports = {
  files: ['*.ts'],
  extends: ['plugin:@typescript-eslint/recommended', 'prettier', 'prettier/@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  rules: {
    ...typescriptConfig,
  },
}
