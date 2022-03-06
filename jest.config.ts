/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  // Automatically clear mock calls, instances and results before every test
  clearMocks: true,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: false,

  // The directory where Jest should output its coverage files
  coverageDirectory: "coverage",

  // A list of paths to directories that Jest should use to search for files in
  roots: [
    "<rootDir>"
  ],

  // Indicates whether each individual test should be reported during the run
  verbose: false,

  preset: 'jest-puppeteer',

  // alias
  moduleNameMapper: {
    "/@/(.*)$": "<rootDir>/src/$1",
    "/#/(.*)$": "<rootDir>/utils/$1",
  },
};
