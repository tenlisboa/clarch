#!/usr/bin/env node

import { program } from "commander";
import { name, description, version } from "../package.json";
import { InitializeProjectStructureCommand } from "../src/new";

program
  .name(name)
  .description(description)
  .version(version)
  .addCommand(new InitializeProjectStructureCommand());

program.parse(process.argv);
