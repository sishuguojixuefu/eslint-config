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
  'no-useless-constructor': 1,
  'max-classes-per-file': 0,
  'class-methods-use-this': 0,
  'import/no-cycle': 0,
  'consistent-return': 0,
  'no-console': 0,
  'no-plusplus': 0,
  'no-return-assign': 0,
  'no-useless-catch': 0,
  'no-nested-ternary': 0, // 禁止使用嵌套的三元表达式
  'no-param-reassign': [2, { props: false }], // 禁止对函数参数再赋值
  'no-restricted-globals': 0, // 禁用特定的全局变量
  'no-use-before-define': 0, // 禁止定义前使用
  'no-underscore-dangle': 0, // 禁止标识符中有悬空下划线
  'no-unused-expressions': 0, // 禁止未使用过的表达式
  'no-unused-vars': 1,
  'prefer-destructuring': [
    2,
    {
      array: false,
      object: true,
    },
  ],
  'default-case': 0,
}
