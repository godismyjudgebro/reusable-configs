/* eslint-disable max-lines */
/**
 * TypeScript ESLint configuration.
 *
 * @type {import('@typescript-eslint/utils').TSESLint.Linter.Config}
 * @see [TSESLint rules](https://typescript-eslint.io/rules/)
 */
module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: { project: './tsconfig.json' },
  plugins: ['@typescript-eslint', 'jsdoc'],
  rules: {
    // Vanilla ESLint Rules
    'consistent-return': 'off', // Useless for statically typed languages.
    'no-void': [
      'error',
      {
        // Ignore `void` floating promises. See: `'@typescript-eslint/no-floating-promises'.ignoreVoid`.
        allowAsStatement: true
      }
    ],
    strict: ['error', 'never'],

    // JSDoc Rules
    'jsdoc/no-types': 'error',
    'jsdoc/require-param-type': 'off',
    'jsdoc/require-property-type': 'off',
    'jsdoc/require-returns-type': 'off',

    // Supported Rules
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
    '@typescript-eslint/await-thenable': 'error',
    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        minimumDescriptionLength: 25,
        'ts-expect-error': { descriptionFormat: '^ TS\\d{4} because .+$' }
      }
    ],
    '@typescript-eslint/ban-types': 'error',
    '@typescript-eslint/class-literal-property-style': 'error',
    '@typescript-eslint/consistent-generic-constructors': 'error',
    '@typescript-eslint/consistent-indexed-object-style': 'error',
    '@typescript-eslint/consistent-type-assertions': [
      'error',
      {
        assertionStyle: 'as',
        objectLiteralTypeAssertions: 'allow-as-parameter'
      }
    ],
    '@typescript-eslint/consistent-type-definitions': 'error',
    '@typescript-eslint/consistent-type-exports': [
      'error',
      { fixMixedExportsWithInlineTypeSpecifier: true }
    ],
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowConciseArrowFunctionExpressionsStartingWithVoid: true,
        allowExpressions: true,
        allowHigherOrderFunctions: false
      }
    ],
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      {
        accessibility: 'explicit',
        overrides: { parameterProperties: 'no-public' }
      }
    ],
    '@typescript-eslint/member-delimiter-style': 'error',
    '@typescript-eslint/member-ordering': [
      'error',
      {
        default: {
          memberTypes: [
            // Index signature
            'signature',

            // Fields
            'private-static-field',
            'protected-static-field',
            'public-static-field',

            'private-decorated-field',
            'protected-decorated-field',
            'public-decorated-field',

            'private-instance-field',
            'protected-instance-field',
            'public-instance-field',

            'private-abstract-field',
            'protected-abstract-field',
            'public-abstract-field',

            'static-field',
            'instance-field',
            'abstract-field',

            'decorated-field',

            'field',

            // Getters & setters
            ['private-static-get', 'private-static-set'],
            ['protected-static-get', 'protected-static-set'],
            ['public-static-get', 'public-static-set'],

            ['private-decorated-get', 'private-decorated-set'],
            ['protected-decorated-get', 'protected-decorated-set'],
            ['public-decorated-get', 'public-decorated-set'],

            ['private-instance-get', 'private-instance-set'],
            ['protected-instance-get', 'protected-instance-set'],
            ['public-instance-get', 'public-instance-set'],

            ['private-abstract-get', 'private-abstract-set'],
            ['protected-abstract-get', 'protected-abstract-set'],
            ['public-abstract-get', 'public-abstract-set'],

            ['static-get', 'static-set'],
            ['instance-get', 'instance-set'],
            ['abstract-get', 'abstract-set'],

            ['decorated-get', 'decorated-set'],

            ['get', 'set'],

            // Constructors
            'private-constructor',
            'protected-constructor',
            'public-constructor',
            'constructor',

            // Methods & call signatures
            'call-signature',

            'private-static-method',
            'protected-static-method',
            'public-static-method',

            'private-decorated-method',
            'protected-decorated-method',
            'public-decorated-method',

            'private-instance-method',
            'protected-instance-method',
            'public-instance-method',

            'private-abstract-method',
            'protected-abstract-method',
            'public-abstract-method',

            'static-method',
            'instance-method',
            'abstract-method',

            'decorated-method',

            'method'
          ],
          order: 'alphabetically-case-insensitive'
        }
      }
    ],
    '@typescript-eslint/method-signature-style': 'error',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        format: ['strictCamelCase'],
        leadingUnderscore: 'forbid',
        selector: 'default',
        trailingUnderscore: 'forbid'
      },
      {
        format: ['StrictPascalCase'],
        selector: 'typeLike'
      }
    ],
    '@typescript-eslint/no-base-to-string': 'error',
    '@typescript-eslint/no-confusing-non-null-assertion': 'error',
    '@typescript-eslint/no-confusing-void-expression': [
      'error',
      { ignoreArrowShorthand: true, ignoreVoidOperator: true }
    ],
    '@typescript-eslint/no-duplicate-enum-values': 'error',
    '@typescript-eslint/no-dynamic-delete': 'error',
    '@typescript-eslint/no-empty-interface': 'error',
    '@typescript-eslint/no-explicit-any': [
      'error',
      { fixToUnknown: true, ignoreRestArgs: false }
    ],
    '@typescript-eslint/no-extra-non-null-assertion': 'error',
    '@typescript-eslint/no-extraneous-class': 'error',
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/no-for-in-array': 'error',
    '@typescript-eslint/no-inferrable-types': 'error',
    '@typescript-eslint/no-invalid-void-type': 'error',
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/no-misused-promises': 'error',
    '@typescript-eslint/no-namespace': 'error',
    '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/no-redundant-type-constituents': 'error',
    '@typescript-eslint/no-require-imports': 'error',
    '@typescript-eslint/no-this-alias': 'error',
    '@typescript-eslint/no-type-alias': [
      'error',
      {
        allowAliases: 'in-unions-and-intersections',
        allowCallbacks: 'always',
        allowConditionalTypes: 'always',
        allowConstructors: 'always',
        allowGenerics: 'always',
        allowLiterals: 'in-unions-and-intersections',
        allowMappedTypes: 'in-unions-and-intersections',
        allowTupleTypes: 'always'
      }
    ],
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
    '@typescript-eslint/no-unnecessary-condition': 'error',
    '@typescript-eslint/no-unnecessary-qualifier': 'error',
    '@typescript-eslint/no-unnecessary-type-arguments': 'error',
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    '@typescript-eslint/no-unnecessary-type-constraint': 'error',
    '@typescript-eslint/no-unsafe-argument': 'error',
    '@typescript-eslint/no-unsafe-assignment': 'error',
    '@typescript-eslint/no-unsafe-call': 'error',
    '@typescript-eslint/no-unsafe-member-access': 'error',
    '@typescript-eslint/no-unsafe-return': 'error',
    '@typescript-eslint/no-useless-empty-export': 'error',
    '@typescript-eslint/no-var-requires': 'error',
    '@typescript-eslint/non-nullable-type-assertion-style': 'error',
    '@typescript-eslint/parameter-properties': 'error',
    '@typescript-eslint/prefer-as-const': 'error',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/prefer-includes': 'error',
    '@typescript-eslint/prefer-literal-enum-member': 'error',
    '@typescript-eslint/prefer-namespace-keyword': 'error',
    '@typescript-eslint/prefer-nullish-coalescing': [
      'error',
      {
        ignoreConditionalTests: true,
        ignoreMixedLogicalExpressions: true,
        ignoreTernaryTests: false
      }
    ],
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/prefer-readonly': 'error',
    '@typescript-eslint/prefer-reduce-type-parameter': 'error',
    '@typescript-eslint/prefer-return-this-type': 'error',
    '@typescript-eslint/prefer-string-starts-ends-with': 'error',
    '@typescript-eslint/prefer-ts-expect-error': 'error',
    '@typescript-eslint/promise-function-async': 'error',
    '@typescript-eslint/require-array-sort-compare': [
      'error',
      { ignoreStringArrays: true }
    ],
    '@typescript-eslint/restrict-plus-operands': [
      'error',
      { checkCompoundAssignments: true }
    ],
    '@typescript-eslint/restrict-template-expressions': [
      'error',
      {
        allowBoolean: true,
        allowNullish: true,
        allowNumber: true
      }
    ],
    '@typescript-eslint/sort-type-union-intersection-members': 'error',
    '@typescript-eslint/strict-boolean-expressions': 'error',
    '@typescript-eslint/switch-exhaustiveness-check': 'error',
    '@typescript-eslint/triple-slash-reference': [
      'error',
      {
        lib: 'never',
        path: 'never',
        types: 'prefer-import'
      }
    ],
    '@typescript-eslint/type-annotation-spacing': 'error',
    '@typescript-eslint/unbound-method': 'error',
    '@typescript-eslint/unified-signatures': 'error',

    // Extension Rules

    '@typescript-eslint/brace-style': [
      'error',
      '1tbs',
      { allowSingleLine: true }
    ],
    'brace-style': 'off',

    '@typescript-eslint/comma-dangle': [
      'error',
      {
        arrays: 'never',
        enums: 'never',
        exports: 'never',
        functions: 'never',
        generics: 'never',
        imports: 'never',
        objects: 'never',
        tuples: 'never'
      }
    ],
    'comma-dangle': 'off',

    '@typescript-eslint/comma-spacing': [
      'error',
      { after: true, before: false }
    ],
    'comma-spacing': 'off',

    '@typescript-eslint/default-param-last': 'error',
    'default-param-last': 'off',

    '@typescript-eslint/dot-notation': [
      'error',
      {
        allowIndexSignaturePropertyAccess: true,
        allowKeywords: true,
        allowPrivateClassPropertyAccess: true,
        allowProtectedClassPropertyAccess: true
      }
    ],
    'dot-notation': 'off',

    '@typescript-eslint/func-call-spacing': ['error', 'never'],
    'func-call-spacing': 'off',

    '@typescript-eslint/indent': [
      'error',
      2,
      {
        ArrayExpression: 1,
        CallExpression: { arguments: 1 },
        FunctionDeclaration: { body: 1, parameters: 1 },
        FunctionExpression: { body: 1, parameters: 1 },
        ImportDeclaration: 1,
        MemberExpression: 1,
        ObjectExpression: 1,
        SwitchCase: 1,
        VariableDeclarator: 1,
        flatTernaryExpressions: false,
        ignoreComments: false,
        ignoredNodes: [
          'TemplateLiteral *',
          'JSXElement',
          'JSXElement > *',
          'JSXAttribute',
          'JSXIdentifier',
          'JSXNamespacedName',
          'JSXMemberExpression',
          'JSXSpreadAttribute',
          'JSXExpressionContainer',
          'JSXOpeningElement',
          'JSXClosingElement',
          'JSXFragment',
          'JSXOpeningFragment',
          'JSXClosingFragment',
          'JSXText',
          'JSXEmptyExpression',
          'JSXSpreadChild'
        ],
        offsetTernaryExpressions: true,
        outerIIFEBody: 1
      }
    ],
    indent: 'off',

    'init-declarations': 'off',

    '@typescript-eslint/keyword-spacing': [
      'error',
      { after: true, before: true }
    ],
    'keyword-spacing': 'off',

    '@typescript-eslint/lines-between-class-members': [
      'error',
      'always',
      { exceptAfterSingleLine: true }
    ],
    'lines-between-class-members': 'off',

    '@typescript-eslint/no-array-constructor': 'error',
    'no-array-constructor': 'off',

    '@typescript-eslint/no-dupe-class-members': 'error',
    'no-dupe-class-members': 'off',

    '@typescript-eslint/no-empty-function': 'error',
    'no-empty-function': 'off',

    '@typescript-eslint/no-extra-parens': ['error', 'functions'],
    'no-extra-parens': 'off',

    '@typescript-eslint/no-extra-semi': 'error',
    'no-extra-semi': 'off',

    '@typescript-eslint/no-implied-eval': 'error',
    'no-implied-eval': 'off',

    '@typescript-eslint/no-invalid-this': 'error',
    'no-invalid-this': 'off',

    '@typescript-eslint/no-loop-func': 'error',
    'no-loop-func': 'off',

    '@typescript-eslint/no-loss-of-precision': 'error',
    'no-loss-of-precision': 'off',

    '@typescript-eslint/no-redeclare': [
      'error',
      { builtinGlobals: false, ignoreDeclarationMerge: true }
    ],
    'no-redeclare': 'off',

    // "@typescript-eslint/no-restricted-imports": "error",
    'no-restricted-imports': [
      'error',
      {
        message: 'Please use `fs-extra` instead.',
        name: 'fs'
      }
    ],

    '@typescript-eslint/no-shadow': [
      'error',
      {
        builtinGlobals: true,
        hoist: 'all',
        ignoreFunctionTypeParameterNameValueShadow: false,
        ignoreTypeValueShadow: false
      }
    ],
    'no-shadow': 'off',

    '@typescript-eslint/no-throw-literal': 'error',
    'no-throw-literal': 'off',

    '@typescript-eslint/no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTaggedTemplates: true,
        allowTernary: true
      }
    ],
    'no-unused-expressions': 'off',

    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        args: 'none',
        caughtErrors: 'none',
        ignoreRestSiblings: true,
        vars: 'all'
      }
    ],
    'no-unused-vars': 'off',

    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        classes: false,
        enums: false,
        functions: false,
        ignoreTypeReferences: true,
        typedefs: false,
        variables: false
      }
    ],
    'no-use-before-define': 'off',

    '@typescript-eslint/no-useless-constructor': 'error',
    'no-useless-constructor': 'off',

    '@typescript-eslint/object-curly-spacing': ['error', 'always'],
    'object-curly-spacing': 'off',

    // prettier-ignore
    // The table-like format is easier to read than Prettier's formatting.
    "@typescript-eslint/padding-line-between-statements": [
      "error",

      // Case clauses
      { "blankLine": "never"  , "next": [ "case", "default"     ], "prev": [ "case", "default"     ] },

      // Directives
      { "blankLine": "always" , "next": [ "*"                   ], "prev": [ "directive"           ] },

      // Export statements:
      { "blankLine": "always" , "next": [ "export"              ], "prev": [ "*"                   ] },
      { "blankLine": "any"    , "next": [ "export"              ], "prev": [ "export"              ] },

      // Import statements:
      { "blankLine": "always" , "next": [ "*"                   ], "prev": [ "import"              ] },
      { "blankLine": "any"    , "next": [ "import"              ], "prev": [ "import"              ] },

      // Return statements:
      { "blankLine": "always" , "next": [ "return"              ], "prev": [ "*"                   ] },

      // Variable declarations:
      { "blankLine": "always" , "next": [ "const", "let", "var" ], "prev": [ "*"                   ] },
      { "blankLine": "any"    , "next": [ "const", "let", "var" ], "prev": [ "const", "let", "var" ] }
    ],
    'padding-line-between-statements': 'off',

    '@typescript-eslint/quotes': [
      'error',
      'single',
      { allowTemplateLiterals: false, avoidEscape: true }
    ],
    quotes: 'off',

    '@typescript-eslint/require-await': 'error',
    'require-await': 'off',

    '@typescript-eslint/return-await': ['error', 'in-try-catch'],
    'return-await': 'off',

    '@typescript-eslint/semi': ['error', 'never'],
    semi: 'off',

    '@typescript-eslint/space-before-blocks': ['error', 'always'],
    'space-before-blocks': 'off',

    '@typescript-eslint/space-before-function-paren': ['error', 'always'],
    'space-before-function-paren': 'off',

    '@typescript-eslint/space-infix-ops': 'error',
    'space-infix-ops': 'off'
  },
  settings: { jsdoc: { mode: 'typescript' } }
}
