'use strict';

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      legacyDecorators: true
    }
  },
  plugins: [
    '@typescript-eslint',
    'ember',
    'ember-suave'
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:ember/recommended',
    'plugin:ember-suave/recommended'
  ],
  env: {
    browser: true
  },
  rules: {
    'ember/no-jquery': 'error',

    'lines-between-class-members': ['error', 'always', {
      'exceptAfterSingleLine': true
    }],

    'ember-suave/lines-between-object-properties': 0,

    // This would fail when enabled for imports from type declarations
    'no-unused-vars': 0,
    // This one is much better
    '@typescript-eslint/no-unused-vars': ['error', { 'vars': 'all', 'args': 'none' }],

    // Conflicting rule with ember-suve
    'prefer-const': 0,

    // Allow template literals without interpolated expression. (ex. `foo`)
    // Hand for test case descriptions that have apostrophes in them.
    'quotes': ['error', 'single', { 'allowTemplateLiterals': true }],

    // Allow snake_case variable access using bracket notation.
    'dot-notation': ['error', { 'allowPattern': '^[a-z]+(_[a-z]+)+$' }],

    // Require parens only for multiple arguments for arrow functions.
    // Ex. arg => {...} instead of (arg) => {...}
    'arrow-parens': ['error', 'as-needed', { 'requireForBlockBody': true }],

    // ember-concurrency-async
    'no-await-in-loop': 'off',

    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-empty-function': 'warn'
  },
  overrides: [
    // node files
    {
      files: [
        '.eslintrc.js',
        '.template-lintrc.js',
        'ember-cli-build.js',
        'testem.js',
        'blueprints/*/index.js',
        'config/**/*.js',
        'lib/*/index.js',
        'server/**/*.js'
      ],
      parserOptions: {
        sourceType: 'script'
      },
      env: {
        browser: false,
        node: true
      },
      plugins: ['node'],
      rules: Object.assign({}, require('eslint-plugin-node').configs.recommended.rules, {
        // add your custom rules and overrides for node files here

        // this can be removed once the following is fixed
        // https://github.com/mysticatea/eslint-plugin-node/issues/77
        'node/no-unpublished-require': 'off'
      })
    }
  ]
};
