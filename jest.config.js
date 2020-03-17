module.exports = {
  roots: ['./src'],
  moduleFileExtensions: ['ts', 'js'],
  testPathIgnorePatterns: ['node_modules/'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  testMatch: ['**/*.test.(ts|tsx)'],
};
