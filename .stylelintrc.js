module.exports = {
  customSyntax: 'postcss-styl',
  rules: {
    // allow Stylus at-rules
    'at-rule-no-unknown': [true, {
      ignoreAtRules: [
        // Stylus conditionals & loops
        'if',
        'else',
        'unless',
        'for',
        'each',
        'while',
        // Stylus mixins & includes
        'mixin',
        'include',
        // Stylus functions & other directives
        'return',
        'function',
        'extends',
        'extend',
        'charset',
        'keyframes',
        'media',
        'supports',
        // PostCSS or experimental
        'css',
        'block',
        '-moz-document'
      ]
    }],

    // allow your custom helper functions
    'function-no-unknown': [true, {
      ignoreFunctions: [
        'gridTemplate',
        'gridTemplateColumns',
        'description',
        'noDescription',
        'itemCard',
        'gap',
        'overflow',
        'textOverflow',
        'fontStyle',
        'has'
      ]
    }],

    // stylistic rules (warnings)
    'declaration-block-trailing-semicolon': null,
    'block-no-empty': [true, { severity: 'warning' }],
    'color-no-invalid-hex': [true, { severity: 'warning' }],
    'declaration-block-no-duplicate-properties': [true, {
      ignore: ['consecutive-duplicates-with-different-values'],
      severity: 'warning'
    }],
    'declaration-block-no-shorthand-property-overrides': [true, { severity: 'warning' }],
    'font-family-no-duplicate-names': [true, { severity: 'warning' }],
    'function-calc-no-unspaced-operator': [true, { severity: 'warning' }],
    'function-linear-gradient-no-nonstandard-direction': [true, { severity: 'warning' }],
    'keyframe-declaration-no-important': [true, { severity: 'warning' }],
    'media-feature-name-no-unknown': [true, { severity: 'warning' }],
    'no-invalid-double-slash-comments': [true, { severity: 'warning' }],
    'property-no-unknown': [true, {
      ignoreProperties: ['i', 't', 'div'],
      severity: 'warning'
    }],
    'selector-pseudo-class-no-unknown': [true, { severity: 'warning' }],
    'selector-pseudo-element-no-unknown': [true, { severity: 'warning' }],
    'string-no-newline': [true, { severity: 'warning' }],
    'unit-no-unknown': [true, { severity: 'warning' }],

    // disable some strict rules
    'alpha-value-notation': null,
    'value-no-vendor-prefix': null
  }
};
