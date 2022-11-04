const path = require('path')

/** Configurations to use with plain CSS. */
const coreExtends = [path.join(__dirname, 'config.core.js')]
/** Configurations to use with Sassy CSS. */
const scssExtends = [path.join(__dirname, 'config.scss.js')]

try {
  require('prettier')

  // This project uses Prettier.

  coreExtends.push('stylelint-config-prettier')
  scssExtends.push('stylelint-config-prettier-scss')
} catch (e) {}

/**
 * Stylelint configuration.
 *
 * @type {import('stylelint').Config}
 */
module.exports = {
  extends: coreExtends,
  overrides: [{ extends: scssExtends, files: ['*.s?ss', '**/*.s?ss'] }]
}
