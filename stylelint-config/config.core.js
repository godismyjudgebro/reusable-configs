/**
 * Vanilla Stylelint configuration, extending the standard Stylelint
 * configuration.
 *
 * @type {import('stylelint').Config}
 * @see [Stylelint rules](https://stylelint.io/user-guide/rules/)
 * @see [Standard config](https://github.com/stylelint/stylelint-config-standard)
 */
module.exports = {
  rules: {
    // Avoid errors > Unknown
    'no-unknown-animations': true,

    // Enforce non-stylistic conventions > Allowed, disallowed & required > At-rule
    'at-rule-property-required-list': {
      'font-face': [
        'font-display',
        'font-family',
        'font-style',
        'font-weight',
        'src'
      ]
    },

    // Enforce non-stylistic conventions > Allowed, disallowed & required > Color
    'color-named': 'never',
    'color-no-hex': true,

    // Enforce non-stylistic conventions > Allowed, disallowed & required > Declaration
    'declaration-property-value-allowed-list': { 'font-display': 'swap' },

    // Enforce non-stylistic conventions > Allowed, disallowed & required > Function
    'function-url-no-scheme-relative': true,
    'function-url-scheme-allowed-list': ['data', 'https'],

    // Enforce non-stylistic conventions > Allowed, disallowed & required > Media feature
    'media-feature-name-disallowed-list': [
      ['max-width', 'min-height', 'max-height'],
      {
        message:
          'Use `min-width`; design for mobile first, then add media queries for larger screens.'
      }
    ],
    'media-feature-name-value-allowed-list': [
      {
        'min-width': [
          // Mobile phone resolution not needed as it ought to be the default;
          // design for mobile first. Most mobile phones are 320-430px wide.
          '768px',
          '1280px',
          '1921px'
        ]
      },
      {
        message:
          'Expected `min-width` to be one of:\n' +
          '- 768px (logical resolution for some iPads);\n' +
          '- 1280px (most desktop monitors are larger than 1280px);\n' +
          '- or 1921px (if larger than 1920px, consider scaling the page to avoid issues, such as text being too small to read).'
      }
    ],
    'selector-no-qualifying-type': [true, { ignore: ['attribute'] }],

    // Enforce non-stylistic conventions > Notation
    'font-weight-notation': 'named-where-possible',

    // Enforce non-stylistic conventions > Pattern
    'comment-pattern': [
      /^[\s*]*(?:iPad|iPhone|iPod|eBay|[^a-z\s*])/u,
      { message: 'Expected comment to begin with capital letter' }
    ]
  }
}
