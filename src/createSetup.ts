import setupTemplates from "./templates/setup";
import fsPromises from "fs/promises";
import fs from "fs";

type Input = {
  projectName: string;
  authorName: string;
  defaultMainFolder?: string;
};

export async function createSetupFilesIfNotExists({
  projectName,
  authorName,
  defaultMainFolder = ".",
}: Input) {
  const templates = Object.entries(setupTemplates);

  for (const [_, fileContent] of templates) {
    const { fileName, template } = fileContent({ projectName, authorName });

    const filePath = `${defaultMainFolder}/${fileName}`;

    const fileExists = fs.existsSync(filePath);

    if (!fileExists) {
      await fsPromises.writeFile(filePath, template);
    }
  }
}
