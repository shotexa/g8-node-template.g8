module.exports = {
  testEnvironment: "node",
  moduleFileExtensions: ["js", "json", "ts"],
  moduleNameMapper: {
    "@src/(.*)": "<rootDir>/src/\$1",
    "@test/(.*)": "<rootDir>/__tests__/\$1",
  },
  preset: "ts-jest/presets/default",
  transform: {
    "^.+\\.(t|j)s\$": "ts-jest",
  },
  testRegex: "/__tests__/.*\\.(test|spec)\\.ts\$",
  coverageDirectory: "coverage",
  collectCoverageFrom: ["**/*.(t|j)s"],
}
