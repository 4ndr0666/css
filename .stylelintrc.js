/** .stylelintrc.js */
module.exports = {
  // Always use the Stylus parser, no matter the extension
  customSyntax: 'postcss-styl',

  rules: {
    /* Disable the rule that’s flagging the lone “@” tokens */
    'at-rule-no-unknown': null,

    /* — keep everything else you had before — */
    'function-no-unknown': [true, {
      ignoreFunctions: [
        'gridTemplate', 'gridTemplateColumns', 'description', 'noDescription',
        'itemCard', 'gap', 'overflow', 'textOverflow', 'fontStyle'
      ]
    }],
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
    'property-no-unknown': [true, { severity: 'warning' }],
    'selector-pseudo-class-no-unknown': [true, { severity: 'warning' }],
    'selector-pseudo-element-no-unknown': [true, { severity: 'warning' }],
    'string-no-newline': [true, { severity: 'warning' }],
    'unit-no-unknown': [true, { severity: 'warning' }],
    'alpha-value-notation': null,
    'value-no-vendor-prefix': null
  }
};
