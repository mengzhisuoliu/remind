module.exports = {
  prettier: true,
  semicolon: false,
  space: 2,
  rules: {
    'import/extensions': 'off',
    'no-multi-assign': 'off',
    'capitalized-comments': 'off',
    '@typescript-eslint/no-loop-func': 'off',
    'import/no-extraneous-dependencies': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/restrict-plus-operands': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    'unicorn/no-array-reduce': 'off',
    'unicorn/prevent-abbreviations': 'off',
    'unicorn/filename-case': 'off',
    'unicorn/no-array-for-each': 'off',
    '@typescript-eslint/naming-convention': 'off',
  },
  ignores: ['vite.config.ts'],
}
