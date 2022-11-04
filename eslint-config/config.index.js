const path = require('path')

/**
 * If this project uses Prettier, this array is equal to: `['prettier']`.
 * Otherwise, this array is empty (`[]`).
 *
 * @type {['prettier']|[]}
 */
const maybePrettier = []
try {
  require('prettier')

  // Prettier is installed.

  maybePrettier.push('prettier')
} catch (e) {}

/**
 * ESLint configuration.
 *
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: [path.join(__dirname, 'config.core.js'), ...maybePrettier],
  overrides: [
    {
      extends: [path.join(__dirname, 'config.typescript.js'), ...maybePrettier],
      files: ['*.ts', '*.mts', '*.cts', '*.tsx']
    }
  ]
}
