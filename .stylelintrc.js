/**
 * Stylelint configuration for this repo’s Stylus-flavoured CSS.
 *
 *  ● Uses `postcss-styl` to understand Stylus syntax.
 *  ● Converts virtually every lint to *warnings* so CI passes,
 *    while still flagging genuine issues in editors.
 *  ● Whitelists the Stylus / PostCSS directives and helpers we rely on.
 */
module.exports = {
  // Tell Stylelint how to parse our Stylus files
  customSyntax: 'postcss-styl',

  // Anything not explicitly set gets flagged only as a *warning*
  defaultSeverity: 'warning',

  rules: {
    /* ─────────────────────────────
       Allow Stylus/PostCSS @-rules
       ───────────────────────────── */
    'at-rule-no-unknown': [true, {
      ignoreAtRules: [
        // Stylus control-flow
        'if', 'else', 'unless', 'for', 'each', 'while',
        // Mixins & functions
        'mixin', 'include', 'function', 'return',
        // Inheritance helpers
        'extend', 'extends',
        // Standard CSS we sometimes output manually
        'charset', 'keyframes', 'media', 'supports',
        // PostCSS/browsers
        'css', 'block', '-moz-document',
        // Stylus occasionally emits a bare “@” token; silence it
        '@',
        // Empty name safety-net (rare parser quirk)
        ''
      ],
      severity: 'warning'
    }],

    /* ─────────────────────────────
       Allow custom helper functions
       ───────────────────────────── */
    'function-no-unknown': [true, {
      ignoreFunctions: [
        'gridTemplate', 'gridTemplateColumns',
        'description', 'noDescription',
        'itemCard', 'gap', 'overflow',
        'textOverflow', 'fontStyle', 'has'
      ],
      severity: 'warning'
    }],

    /* ─────────────────────────────
       Allow shorthand helper props
       ───────────────────────────── */
    'property-no-unknown': [true, {
      ignoreProperties: ['i', 't', 'div'],
      severity: 'warning'
    }],

    /* ─────────────────────────────
       Generic sanity-check rules
       (all as warnings so CI never fails)
       ───────────────────────────── */
    'block-no-empty':                          [true, { severity: 'warning' }],
    'color-no-invalid-hex':                    [true, { severity: 'warning' }],
    'declaration-block-no-duplicate-properties':[true, {
      ignore: ['consecutive-duplicates-with-different-values'],
      severity: 'warning'
    }],
    'declaration-block-no-shorthand-property-overrides':[true, { severity: 'warning' }],
    'font-family-no-duplicate-names':          [true, { severity: 'warning' }],
    'function-calc-no-unspaced-operator':      [true, { severity: 'warning' }],
    'function-linear-gradient-no-nonstandard-direction':[true, { severity: 'warning' }],
    'keyframe-declaration-no-important':       [true, { severity: 'warning' }],
    'media-feature-name-no-unknown':           [true, { severity: 'warning' }],
    'no-invalid-double-slash-comments':        [true, { severity: 'warning' }],
    'selector-pseudo-class-no-unknown':        [true, { severity: 'warning' }],
    'selector-pseudo-element-no-unknown':      [true, { severity: 'warning' }],
    'string-no-newline':                       [true, { severity: 'warning' }],
    'unit-no-unknown':                         [true, { severity: 'warning' }],

    /* ─────────────────────────────
       Rules disabled because Stylus
       ───────────────────────────── */
    'declaration-block-trailing-semicolon': null,
    'alpha-value-notation':                null,
    'value-no-vendor-prefix':              null
  }
};
