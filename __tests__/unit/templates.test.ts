import { expect, describe, test, jest, beforeEach } from "@jest/globals";

import templates from "../../src/templates/setup";

const {
  packageJsonTemplate,
  licenseTemplate,
  buildFileTemplate,
  prettierRcTemplate,
  tsConfigTemplate,
  eslintRcTemplate,
  gitignoreTemplate,
  jestConfigTemplate,
  jsConfigTemplate,
} = templates;

import {
  buildFileTemplateMock,
  eslintRcTemplateMock,
  gitignoreTemplateMock,
  jestConfigTemplateMock,
  jsConfigTemplateMock,
  licenseTemplateMock,
  packageJsonTemplateMock,
  prettierRcTemplateMock,
  tsConfigTemplateMock,
} from "./mocks";

describe("templates", () => {
  const projectName = "some-project";
  const authorName = "Some Author Name";

  beforeEach(() => {
    jest.restoreAllMocks();
    jest.clearAllMocks();
  });

  test("should geretare .eslintrc.json template", () => {
    const expected = {
      fileName: ".eslintrc.json",
      template: eslintRcTemplateMock,
    };

    const result = eslintRcTemplate();

    expect(result).toStrictEqual(expected);
  });

  test("should geretare .gitignore template", () => {
    const expected = {
      fileName: ".gitignore",
      template: gitignoreTemplateMock,
    };

    const result = gitignoreTemplate();

    expect(result).toStrictEqual(expected);
  });

  test("should geretare .prettierrc template", () => {
    const expected = {
      fileName: ".prettierrc",
      template: prettierRcTemplateMock,
    };

    const result = prettierRcTemplate();

    expect(result).toStrictEqual(expected);
  });

  test("should geretare build.js template", () => {
    const expected = {
      fileName: "build.js",
      template: buildFileTemplateMock,
    };

    const result = buildFileTemplate();

    expect(result).toStrictEqual(expected);
  });

  test("should geretare jest.config.js template", () => {
    const expected = {
      fileName: "jest.config.js",
      template: jestConfigTemplateMock,
    };

    const result = jestConfigTemplate();

    expect(result).toStrictEqual(expected);
  });

  test("should geretare jsconfig.json template", () => {
    const expected = {
      fileName: "jsconfig.json",
      template: jsConfigTemplateMock,
    };

    const result = jsConfigTemplate();

    expect(result).toStrictEqual(expected);
  });

  test("should geretare LICENSE template", () => {
    const expected = {
      fileName: "LICENSE",
      template: licenseTemplateMock,
    };

    const result = licenseTemplate({ authorName });

    expect(result).toStrictEqual(expected);
  });

  test("should geretare package.json template", () => {
    const expected = {
      fileName: "package.json",
      template: packageJsonTemplateMock,
    };

    const result = packageJsonTemplate({ projectName });

    expect(result).toStrictEqual(expected);
  });

  test("should geretare tsconfig.json template", () => {
    const expected = {
      fileName: "tsconfig.json",
      template: tsConfigTemplateMock,
    };

    const result = tsConfigTemplate();

    expect(result).toStrictEqual(expected);
  });
});
