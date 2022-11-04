# `@godismyjudgebro/stylelint-config`

Daniel’s preferred configuration for [Stylelint](https://stylelint.io/). It
supports both CSS and SCSS. When you install this package, the required
packages, including Stylelint itself, will be automatically installed. It
extends the standard Stylelint configurations for both languages
([CSS][css-standard] and [SCSS][scss-standard]).

[css-standard]: https://github.com/stylelint/stylelint-config-standard
[scss-standard]: https://github.com/stylelint-scss/stylelint-config-standard-scss

## Installation

1. Install the package ([@godismyjudgebro/stylelint-config][npm]):
   ```sh
   npm i -D @godismyjudgebro/stylelint-config
   ```
2. Add the following to your `package.json`:
   ```json
   "stylelint": {
     "extends": "@godismyjudgebro/stylelint-config"
   }
   ```
3. Optionally, add the following to your `package.json` to lint SCSS files:
   ```json
   "scripts": {
     "lint:scss": "stylelint '**/*.scss'"
   }
   ```

[npm]: https://www.npmjs.com/package/@godismyjudgebro/stylelint-config
