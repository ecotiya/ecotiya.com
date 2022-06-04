module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-recess-order'],
  plugins: ['stylelint-order'],
  ignoreFiles: ['**/node_modules/**'],
  rules: {
    'string-quotes': 'single',
    'selector-class-pattern': '^[a-z][a-z0-9-]+$',
    'selector-id-pattern': '^[a-z][a-z0-9-]+$',
  },
};
