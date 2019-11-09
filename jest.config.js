module.exports = {
  testEnvironment: 'node',
  testURL: 'http://localhost',
  verbose: true,
  moduleNameMapper: {
    '\\.(css|less|styl|scss|sass)$': 'babel-jest',
    '\\.(jpg|jpeg|png|gif)$': './empty-module.js',
  },
  roots: ['./src'],
  moduleFileExtensions: ['js', 'jsx', 'node'],
  transform: {
    '\\.(js|jsx)$': 'babel-jest',
  },
  testRegex: '.*\\.test\\.(js|jsx)$',
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80,
    },
  },
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx}', '!src/index.js', '!node_modules/**'],
};
