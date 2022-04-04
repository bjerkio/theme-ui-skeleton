module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: [
    '.*.utils.ts',
    '.*/fixtures.ts',
    '.*/*.fixtures.ts',
    '.*/dist/.*',
    '.*dist.*',
    'src/test-utils.ts',
  ],
  coveragePathIgnorePatterns: [
    'src/test-utils.ts',
  ],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.jest.json',
    },
  },
};
