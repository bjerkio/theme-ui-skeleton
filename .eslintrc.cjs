module.exports = {
  extends: ['@bjerk/eslint-config', 'next/core-web-vitals'],
  rules: {
    'import/no-default-export': 'off',
    'react/display-name': 'off',
  },
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
};
