import { expect, describe, test, jest, beforeEach } from "@jest/globals";
import fsPromises from "fs/promises";
import fs from "fs";
import { createSetupFilesIfNotExists } from "../../src/createSetup";

import setupTemplates from "../../src/templates/setup";

const setupTemplatesQuantity = Object.keys(setupTemplates).length;

describe("#createSetup", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
    jest.clearAllMocks();
  });

  test("should create files if they don't exist", async () => {
    const fsPromisesSpy = jest
      .spyOn(fsPromises, "writeFile")
      .mockResolvedValue(undefined);
    const fsSpy = jest.spyOn(fs, "existsSync").mockReturnValue(false as never);

    await createSetupFilesIfNotExists({
      projectName: "test-project",
      authorName: "Gabriel Lisboa",
    });

    expect(fsPromisesSpy).toHaveBeenCalledTimes(setupTemplatesQuantity);
    expect(fsSpy).toHaveBeenCalledTimes(setupTemplatesQuantity);
  });

  test("should not create files if they exist", async () => {
    const fsCreateFileSpy = jest
      .spyOn(fsPromises, "writeFile")
      .mockResolvedValue(undefined);
    const fsExistsFileSpy = jest
      .spyOn(fs, "existsSync")
      .mockReturnValue(true as never);

    await createSetupFilesIfNotExists({
      projectName: "test-project",
      authorName: "Gabriel Lisboa",
    });

    expect(fsCreateFileSpy).not.toHaveBeenCalledTimes(setupTemplatesQuantity);
    expect(fsExistsFileSpy).toHaveBeenCalledTimes(setupTemplatesQuantity);
  });
});
