module.exports = {
  semi: true,
  trailingComma: 'all',
  singleQuote: true,
  overrides: [
    {
      files: ['**/*.css', '**/*.scss', '**/*.html'],
      options: {
        singleQuote: false,
      },
    },
  ],
  printWidth: 90,
  tabWidth: 2,
  endOfLine: 'auto',
};
