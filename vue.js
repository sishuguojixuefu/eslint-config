module.exports = {
  files: ['*.vue'],
  extends: ['airbnb-base', 'plugin:vue/recommended', 'plugin:prettier/recommended', 'prettier'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
    ecamaVersion: 2018,
  },
  settings: {
    'import/extensions': ['.js', '.ts', '.vue'],
  },
  env: {
    browser: true,
    node: true,
  },
  globals: {
    __static: true,
  },
  // eslint 插件
  plugins: ['vue', 'prettier'],
  // eslint 规则
  rules: {
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': 0,
    'import/extensions': 0,
    'max-classes-per-file': 0,
    // allow paren-less arrow functions
    'arrow-parens': 0,
    'generator-star-spacing': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'lines-between-class-members': [
      'error',
      'always',
      {
        exceptAfterSingleLine: false,
      },
    ],
    'arrow-body-style': 2,
    'comma-dangle': 0,
    semi: [2, 'never'],
    'object-curly-newline': 0,
    'max-len': [
      0,
      {
        code: 200,
      },
    ],
    'global-require': 0,
    'guard-for-in': 0,
    'prefer-rest-params': 0,
    'no-console': 0,
    'no-unused-vars': 1,
    'no-param-reassign': [2, { props: false }],
    'no-restricted-syntax': 0,
    'no-restricted-globals': 0,
    'no-underscore-dangle': 0,
    'no-shadow': 0,
    'no-lonely-if': 0,
    'vue/require-valid-default-prop': 0,
    'vue/no-unused-vars': 1,
    'vue/require-v-for-key': 1,
    'vue/max-attributes-per-line': 0, // 解决Attribute "bind" should be on a new line
    'vue/html-self-closing': 0,
    'vue/html-indent': 0,
    'vue/order-in-components': 0,
    'vue/attribute-hyphenation': 0,
    'vue/no-unused-components': 1,
    'vue/singleline-html-element-content-newline': 0,
    'vue/no-parsing-error': [
      2,
      {
        'x-invalid-end-tag': false,
      },
    ],
    'no-eval': 0,
  },
}
