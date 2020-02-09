# @sishuguojixuefu/eslint-config

> 支持 vue、jsx、js、ts、tsx

## Installation

```
yarn add -D @sishuguojixuefu/eslint-config
```

## Fast Usage

Config in package.json:

```json
{
  "eslintConfig": {
    "extends": ["@sishuguojixuefu"],
  },
  "eslintIgnore": ["!.eslintrc.js", "!.prettierrc.js", "index.js"],
  "prettier": "@sishuguojixuefu/eslint-config/.prettierrc.js"
}
```

## Single File Usage

Add to your eslint config (`.eslintrc.js`):

```js
module.exports = {
  root: true,
  extends: '@sishuguojixuefu'
}
```

### react-native

```js
module.exports = {
  root: true,
  extends: '@sishuguojixuefu',
  env: {
    'react-native/react-native': true,
  }
}
```

### vue with ts

```js
module.exports = {
  root: true,
  extends: '@sishuguojixuefu',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaFeatures: {
      legacyDecorators: true,
    },
  },
}

```

## More

### .eslintignore

```
!.eslintrc.js
!.prettierrc.js
```

### .prettierrc.js

```js
module.exports = {
  ...require('@sishuguojixuefu/eslint-config/.prettierrc.js'),
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
