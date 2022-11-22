/* eslint-disable max-lines */
/**
 * Vanilla ESLint configuration, extending StandardJS.
 *
 * @type {import('eslint').Linter.Config}
 * @see [ESLint rules](https://eslint.org/docs/rules/)
 * @see [JavaScript Standard](https://github.com/standard/eslint-config-standard)
 */
module.exports = {
  env: {
    browser: true,
    es2022: true,
    node: true
  },
  extends: ['standard'],
  ignorePatterns: ['dist/**/*'],
  overrides: [
    {
      env: { jest: true },
      files: ['*.test.js'],
      rules: {
        'max-lines-per-function': 'off',
        'max-nested-callbacks': 'off'
      }
    }
  ],
  parserOptions: { ecmaVersion: 12, sourceType: 'module' },
  plugins: ['jsdoc'],
  rules: {
    // Possible Problems
    'for-direction': 'error',
    'getter-return': 'error',
    'no-constant-binary-expression': 'error',
    'no-constructor-return': 'error',
    'no-dupe-else-if': 'error',
    'no-import-assign': 'error',
    'no-inner-declarations': 'error',
    'no-promise-executor-return': 'error',
    'no-setter-return': 'error',
    'no-unsafe-optional-chaining': [
      'error',
      { disallowArithmeticOperators: true }
    ],
    'no-unused-private-class-members': 'warn',
    'require-atomic-updates': 'error',

    // Suggestions
    'arrow-body-style': 'error',
    'block-scoped-var': 'error',
    'capitalized-comments': [
      'error',
      'always',
      {
        ignoreConsecutiveComments: true,
        ignorePattern: '^\\s*prettier-ignore$'
      }
    ],
    'class-methods-use-this': 'error',
    complexity: 'error',
    'consistent-return': 'error',
    'consistent-this': 'error',
    'default-case': ['error', { commentPattern: '^No default.$' }],
    'default-param-last': 'error',
    'func-name-matching': [
      'error',
      'always',
      { considerPropertyDescriptor: true }
    ],
    'func-names': ['error', 'as-needed'],
    'func-style': ['error', 'declaration'],
    'grouped-accessor-pairs': ['error', 'getBeforeSet'],
    'guard-for-in': 'error',
    'id-match': [
      'error',
      // StrictPascalCase and strictCamelCase
      '^[a-z]*([A-Z][a-z]+)*[A-Z]*[0-9]*$',
      {
        classFields: true,
        onlyDeclarations: true,
        properties: true
      }
    ],
    'init-declarations': 'error',
    'max-classes-per-file': 'error',
    'max-depth': 'error',
    'max-lines': [
      'error',
      {
        skipBlankLines: true,
        skipComments: true
      }
    ],
    'max-lines-per-function': [
      'error',
      {
        skipBlankLines: true,
        skipComments: true
      }
    ],
    'max-nested-callbacks': ['error', { max: 2 }],
    'max-params': ['error', { max: 4 }],
    'max-statements': 'error',
    'multiline-comment-style': ['error', 'separate-lines'],
    'no-alert': 'error',
    'no-bitwise': ['error', { allow: ['^', '~'] }],
    'no-confusing-arrow': 'error',
    'no-console': 'error',
    'no-div-regex': 'error',
    'no-else-return': 'error',
    'no-empty-function': 'error',
    'no-eq-null': 'error',
    'no-extra-label': 'error',
    'no-extra-semi': 'error',
    'no-implicit-coercion': 'error',
    'no-implicit-globals': 'error',
    'no-invalid-this': 'error',
    'no-lonely-if': 'error',
    'no-loop-func': 'error',
    'no-multi-assign': 'error',
    'no-negated-condition': 'error',
    'no-nested-ternary': 'error',
    'no-nonoctal-decimal-escape': 'error',
    'no-param-reassign': ['error', { props: true }],
    'no-restricted-imports': [
      'error',
      {
        message: 'Please use `fs-extra` instead.',
        name: 'fs'
      }
    ],
    'no-restricted-syntax': [
      'error',
      {
        message: 'Prefer `String#match` over `RegExp#exec`.',
        selector:
          "CallExpression[callee.object.type='Literal'][callee.property.name='exec']"
      }
    ],
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-shadow': ['error', { builtinGlobals: true, hoist: 'all' }],
    'no-underscore-dangle': [
      'error',
      {
        allow: ['__dirname', '__filename'],
        allowAfterThis: true
      }
    ],
    'no-useless-concat': 'error',
    'no-warning-comments': 'warn', // Warns about todos, making them easier to find. Preferably, todos should be resolved before merging.
    'operator-assignment': 'error',
    'prefer-arrow-callback': 'error',
    'prefer-const': [
      'error',
      {
        destructuring: 'all',
        ignoreReadBeforeAssign: true // `no-use-before-define` makes `false` redundant.
      }
    ],
    'prefer-exponentiation-operator': 'error',
    'prefer-named-capture-group': 'error',
    'prefer-numeric-literals': 'error',
    'prefer-object-has-own': 'error',
    'prefer-object-spread': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    radix: 'error',
    'require-await': 'error',
    'require-unicode-regexp': 'error',
    'require-yield': 'error',
    'sort-imports': ['error', { allowSeparatedGroups: true, ignoreCase: true }],
    'sort-keys': [
      'error',
      'asc',
      { allowLineSeparatedGroups: true, natural: true }
    ],
    strict: ['error', 'global'],

    // Layout & Formatting
    'array-bracket-newline': ['error', { multiline: true }],
    'array-element-newline': ['error', { multiline: true }],
    'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
    'function-call-argument-newline': ['error', 'consistent'],
    'function-paren-newline': ['error', 'multiline-arguments'],
    'implicit-arrow-linebreak': 'error',
    'jsx-quotes': 'error',
    'linebreak-style': 'error',
    'max-len': [
      'error',
      {
        code: 120,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        tabWidth: 2
      }
    ],
    'max-statements-per-line': 'error',
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 3 }],
    'nonblock-statement-body-position': 'error',

    // prettier-ignore
    // The table-like format is easier to read than Prettier's formatting.
    "padding-line-between-statements": [
      "error",

      // Case clauses
      { "blankLine": "never"  , "next": [ "case", "default"      ], "prev": [ "case", "default"      ] },

      // Directives
      { "blankLine": "always" , "next": [ "*"                    ], "prev": [ "directive"            ] },

      // Export statements:
      { "blankLine": "always" , "next": [ "cjs-export", "export" ], "prev": [ "*"                    ] },
      { "blankLine": "any"    , "next": [ "cjs-export", "export" ], "prev": [ "cjs-export", "export" ] },

      // Import statements:
      { "blankLine": "always" , "next": [ "*"                    ], "prev": [ "cjs-import", "import" ] },
      { "blankLine": "any"    , "next": [ "cjs-import", "import" ], "prev": [ "cjs-import", "import" ] },

      // Return statements:
      { "blankLine": "always" , "next": [ "return"               ], "prev": [ "*"                    ] },

      // Variable declarations:
      { "blankLine": "always" , "next": [ "const", "let", "var"  ], "prev": [ "*"                    ] },
      { "blankLine": "any"    , "next": [ "const", "let", "var"  ], "prev": [ "const", "let", "var"  ] }
    ],
    'semi-style': ['error', 'first'],
    'switch-colon-spacing': 'error',

    // JSDoc
    'jsdoc/check-access': 'error',
    'jsdoc/check-alignment': 'error',
    'jsdoc/check-indentation': ['error', { excludeTags: [] }],
    'jsdoc/check-line-alignment': 'error',
    'jsdoc/check-param-names': 'error',
    'jsdoc/check-property-names': 'error',
    'jsdoc/check-syntax': 'error',
    'jsdoc/check-tag-names': 'error',
    'jsdoc/check-types': 'error',
    'jsdoc/check-values': ['error', { numericOnlyVariation: true }],
    'jsdoc/empty-tags': 'error',
    'jsdoc/implements-on-classes': 'error',
    'jsdoc/multiline-blocks': 'error',
    'jsdoc/newline-after-description': 'error',
    'jsdoc/no-bad-blocks': ['error', { preventAllMultiAsteriskBlocks: true }],
    'jsdoc/no-defaults': ['error', { noOptionalParamNames: true }],
    'jsdoc/no-multi-asterisks': [
      'error',
      { allowWhitespace: true, preventAtEnd: true, preventAtMiddleLines: true }
    ],
    'jsdoc/no-undefined-types': 'error',
    'jsdoc/require-asterisk-prefix': 'error',
    'jsdoc/require-description': 'error',
    'jsdoc/require-description-complete-sentence': 'error',
    'jsdoc/require-hyphen-before-param-description': 'error',
    'jsdoc/require-jsdoc': [
      'error',
      {
        minLineCount: 3,
        require: {
          ArrowFunctionExpression: true,
          ClassDeclaration: true,
          ClassExpression: true,
          FunctionDeclaration: true,
          FunctionExpression: true,
          MethodDefinition: true
        }
      }
    ],
    'jsdoc/require-param': 'error',
    'jsdoc/require-param-description': [
      'error',
      {
        defaultDestructuredRootDescription: 'The options object.',
        setDefaultDestructuredRootDescription: true
      }
    ],
    'jsdoc/require-param-name': 'error',
    'jsdoc/require-param-type': [
      'error',
      {
        setDefaultDestructuredRootType: true
      }
    ],
    'jsdoc/require-property': 'error',
    'jsdoc/require-property-description': 'error',
    'jsdoc/require-property-name': 'error',
    'jsdoc/require-property-type': 'error',
    'jsdoc/require-returns': [
      'error',
      {
        checkGetters: false
      }
    ],
    'jsdoc/require-returns-check': 'error',
    'jsdoc/require-returns-description': 'error',
    'jsdoc/require-returns-type': 'error',
    'jsdoc/require-throws': 'error',
    'jsdoc/require-yields': 'error',
    'jsdoc/require-yields-check': 'error',
    'jsdoc/sort-tags': 'error',
    'jsdoc/tag-lines': 'error'
  },
  settings: {
    jsdoc: {
      mode: 'jsdoc',
      tagNamePreference: {
        // Disable todos
        todo: {
          message:
            'Avoid using @todo tags; ' +
            'use GitHub issues instead or fix the issue immediately.'
        },

        // @abstract
        virtual: 'abstract',

        // @augments
        augments: 'extends',

        // @class
        constructor: 'class',

        // @constant
        constant: 'const',

        // @default
        defaultvalue: 'default',

        // @description
        desc: 'description',

        // @external
        host: 'external',

        // @file
        file: 'fileoverview',
        overview: 'fileoverview',

        // @fires
        emits: 'fires',

        // @function
        func: 'function',
        method: 'function',

        // @member
        member: 'var',

        // @param
        arg: 'param',
        argument: 'param',

        // @property
        prop: 'property',

        // @returns
        return: 'returns',

        // @throws
        exception: 'throws',

        // @yields
        yield: 'yields'
      }
    }
  }
}
