module.exports = {
  env: {
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'next/core-web-vitals',
    'google',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'require-jsdoc': ['off'],
    '@next/next/no-img-element': ['off'],
    '@typescript-eslint/ban-types': ['off'],
    '@typescript-eslint/no-non-null-assertion': ['off'],
  },
};
