import antfu from '@antfu/eslint-config'

export default antfu({
  react: true,
  rules: {
    'max-len': ['error', 80, { ignoreStrings: true }],
    'unused-imports/no-unused-imports': 'off',
    '@typescript-eslint/consistent-type-definitions': 'off',
    '@typescript-eslint/no-redeclare': 'off',
  },
})
