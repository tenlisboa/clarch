import Template from "../contracts/template";

const template = `
const { pathsToModuleNameMapper } = require("ts-jest");
const { compilerOptions } = require("./tsconfig.json");

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  coverageReporters: ["json", "lcov", "text", "clover"],
  testMatch: ["**/__tests__/**/*.(test|spec).ts?(x)"],
  transformIgnorePatterns: ["/node_modules/", "\\.pnp\\.[^\\/]+$"],
  watchPathIgnorePatterns: ["/node_modules/"],
  roots: ["<rootDir>/"],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: "<rootDir>/src/",
  }),
  collectCoverageFrom: ["src/**/*.ts", "!src/index.ts"],
  coverageThreshold: {
    global: {
      branch: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  maxWorkers: "50%",
  tstEnvironment: "node",
};
`;

export function jestConfigTemplate(input?: any): Template {
  return {
    fileName: "jest.config.js",
    template: template,
  };
}
