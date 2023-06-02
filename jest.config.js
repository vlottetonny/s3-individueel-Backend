module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: [
    '**/__tests__/**/*.ts', // Include TypeScript files in __tests__ folders
    '**/?(*.)+(spec|test).ts' // Include TypeScript files with spec or test in their filename
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/dist/' // Exclude the dist folder from tests
  ]
};
