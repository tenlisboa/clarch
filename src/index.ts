#!/usr/bin/env node

import yargs, { BuilderCallback, CommandBuilder } from "yargs";
import { hideBin } from "yargs/helpers";
import { createSetupFilesIfNotExists } from "./createSetup";

const argv = yargs(hideBin(process.argv))
  .scriptName("clarch")
  .strictCommands(true)
  .usage("$0 init [options]")
  .command("init", "Initialize npm project", builder => {
    return builder
      .option("author", {
        alias: "a",
        demandOption: true,
        describe: "Author name",
        type: "string",
      })
      .example("init -a 'My name'", "Pass author name");
  })
  .check((argv, options) => {
    if (argv._.length === 0) throw new Error("You need to pass a command");

    return true;
  })
  .help().argv;

const { author } = argv as any;

function getCurrentFolderName() {
  const currentAbsoluteDir = process.cwd();
  const currentFolderName = currentAbsoluteDir.split("/").pop();

  return currentFolderName ?? "my-project";
}

createSetupFilesIfNotExists({
  projectName: getCurrentFolderName(),
  authorName: author,
  defaultMainFolder: ".",
}).then(() => console.log("Setup files created"));
