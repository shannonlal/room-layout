module.exports = {
  testEnvironment: 'node',
  testURL: 'http://localhost',
  verbose: true,
  moduleNameMapper: {
    '\\.(css|less|styl|scss|sass)$': 'babel-jest',
    '\\.(jpg|jpeg|png|gif)$': './empty-module.js',
    '^dnd-core$': 'dnd-core/dist/cjs',
    '^react-dnd$': 'react-dnd/dist/cjs',
    '^react-dnd-html5-backend$': 'react-dnd-html5-backend/dist/cjs',
    '^react-dnd-touch-backend$': 'react-dnd-touch-backend/dist/cjs',
    '^react-dnd-test-backend$': 'react-dnd-test-backend/dist/cjs',
    '^react-dnd-test-utils$': 'react-dnd-test-utils/dist/cjs',
  },
  roots: ['./src'],
  moduleFileExtensions: ['js', 'jsx', 'node', 'ts'],
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
  collectCoverage: false,
  collectCoverageFrom: ['src/**/*.{js,jsx}', '!src/index.js', '!node_modules/**'],
};
