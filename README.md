# @sishuguojixuefu/eslint-config

## Installation

```
yarn add -D @sishuguojixuefu/eslint-config typescript
```

## Usage

Add to your eslint config (`.eslintrc`, or `eslintConfig` field in `package.json`):

```json
{
  "extends": "@sishuguojixuefu"
}
```

## More

### .prettierrc.js

```js
module.exports = {
  printWidth: 120, // 一行的字符数，如果超过会进行换行，默认为80
  tabWidth: 2, // 一个tab代表几个空格数
  semi: false, // 行位是否使用分号，默认为true
  trailingComma: 'es5', // 是否使用尾逗号，有三个可选值"<none|es5|all>"
  singleQuote: true, // 字符串是否使用单引号，默认为false，使用双引号
}
```

### .prettierignore

```
**/node_modules/*
```

### .editorconfig

```
# EditorConfig is awesome: http://EditorConfig.org

# top-most EditorConfig file
root = true

# Unix-style newlines with a newline ending every file
[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

[*.md]
trim_trailing_whitespace = false

[*.gradle]
indent_size = 4

[BUCK]
indent_size = 4
```
