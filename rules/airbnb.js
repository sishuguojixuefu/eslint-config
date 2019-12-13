module.exports = {
  'global-require': 0,
  'lines-between-class-members': [
    // 要求或禁止在类成员之间出现空行
    2,
    'always',
    {
      exceptAfterSingleLine: true, //  跳过对单行类成员之后的空行的检查
    },
  ],
  'max-classes-per-file': 0,
  'no-console': 0,
  'no-param-reassign': [2, { props: false }],
  'no-restricted-globals': 0, // 禁用特定的全局变量
  'no-use-before-define': [2, { functions: true, classes: true, variables: false }], // 禁止定义前使用（变量例外）
  'no-underscore-dangle': [2, { allow: ['__DEV__'] }], // 禁止标识符中有悬空下划线
  'no-unused-expressions': 0, // 禁止未使用过的表达式
  'no-unused-vars': 0,
  'prefer-destructuring': [
    2,
    {
      array: false,
      object: true,
    },
  ],
}
