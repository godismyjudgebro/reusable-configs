/**
 * SCSS Stylelint configuration, extending the SCSS standard Stylelint
 * configuration.
 *
 * @type {import('stylelint').Config}
 * @see [Documentation of the rules](https://github.com/stylelint-scss/stylelint-scss#list-of-rules)
 * @see [The SCSS standard config](https://github.com/stylelint-scss/stylelint-config-standard-scss)
 */
module.exports = {
  customSyntax: 'postcss-scss',
  extends: ['stylelint-config-standard-scss'],
  rules: {
    // @-each
    'scss/at-each-key-value-single-line': true,

    // @-function
    'scss/at-function-named-arguments': [
      'always',
      { ignore: ['single-argument'], ignoreFunctions: ['map.get'] }
    ],

    // @-mixin
    'scss/at-mixin-named-arguments': [
      'always',
      { ignore: ['single-argument'] }
    ],

    // @-use
    'scss/at-use-no-unnamespaced': true,

    // $-variable
    'scss/dollar-variable-colon-newline-after': 'always-multi-line',
    'scss/dollar-variable-no-namespaced-assignment': true,

    // Declaration
    'scss/declaration-nested-properties': 'never',

    // Dimension
    'scss/dimension-no-non-numeric-values': true,

    // Function
    'scss/function-color-relative': true,

    // Media feature
    'scss/media-feature-value-dollar-variable': [
      'always',
      { ignore: ['keywords'] }
    ],

    // Selector
    'scss/selector-no-redundant-nesting-selector': true,

    // General / Sheet
    'scss/no-duplicate-dollar-variables': [true, { ignoreInside: 'at-rule' }]
  }
}
