# `@godismyjudgebro/eslint-config`

Daniel’s preferred configuration for [ESLint](https://eslint.org/). It supports
both JavaScript and TypeScript. When you install this package, the required
packages, including ESLint itself, will be automatically installed. It extends
the [JavaScript Standard configuration][standardjs].

[standardjs]: https://github.com/standard/eslint-config-standard

## Installation

1. Install the package ([@godismyjudgebro/eslint-config][npm]):
   ```sh
   npm i -D @godismyjudgebro/eslint-config
   ```
2. Add the following to your `package.json`:
   ```json
   "eslintConfig": {
     "extends": "@godismyjudgebro/eslint-config"
   }
   ```
3. Optionally, add the following to your `package.json` to lint TypeScript files:
   ```json
   "scripts": {
     "lint:ts": "eslint '**/*.ts'"
   }
   ```

[npm]: https://www.npmjs.com/package/@godismyjudgebro/eslint-config
