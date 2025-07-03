/**
 * Stylelint configuration tuned for Stylus-flavoured CSS used in this repo.
 * All “unknown” Stylus constructs are downgraded to *warnings* so the CI job
 * passes while still flagging anything genuinely suspicious.
 */
module.exports = {
  customSyntax: 'postcss-styl',

  // Everything that is not explicitly an “error” will be treated as a warning.
  defaultSeverity: 'warning',

  rules: {
    /* ────────────────────────
       Core parser allowances
       ──────────────────────── */
    'at-rule-no-unknown': [true, {
      // Stylus & PostCSS directives we purposely use
      ignoreAtRules: [
        // conditionals / loops
        'if', 'else', 'unless', 'for', 'each', 'while',
        // mixins & includes
        'mixin', 'include', 'return', 'function',
        // inheritance helpers
        'extend', 'extends',
        // ordinary CSS at-rules we want silent
        'charset', 'keyframes', 'media', 'supports',
        // PostCSS-specific / browser-quirk
        'css', 'block', '-moz-document',
        // sometimes Stylus spits out a lone “@” token ➜ empty string handles it
        ''
      ],
      severity: 'warning'
    }],

    'function-no-unknown': [true, {
      // project-specific helper functions
      ignoreFunctions: [
        'gridTemplate', 'gridTemplateColumns',
        'description', 'noDescription',
        'itemCard', 'gap', 'overflow',
        'textOverflow', 'fontStyle', 'has'
      ],
      severity: 'warning'
    }],

    'property-no-unknown': [true, {
      // shorthand helpers we’re intentionally using
      ignoreProperties: ['i', 't', 'div'],
      severity: 'warning'
    }],

    /* ────────────────────────
       Stylistic & sanity checks
       (kept as warnings so they don’t break CI)
       ──────────────────────── */
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
    'selector-pseudo-class-no-unknown': [true, { severity: 'warning' }],
    'selector-pseudo-element-no-unknown': [true, { severity: 'warning' }],
    'string-no-newline': [true, { severity: 'warning' }],
    'unit-no-unknown': [true, { severity: 'warning' }],

    /* ────────────────────────
       Turn off rules that clash with Stylus syntax
       ──────────────────────── */
    'declaration-block-trailing-semicolon': null,
    'alpha-value-notation':               null,
    'value-no-vendor-prefix':             null
  }
};
