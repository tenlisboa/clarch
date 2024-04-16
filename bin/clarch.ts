#!/usr/bin/env node

import { program } from "commander";
import { name, description, version } from "../package.json";
import { InitProgram } from "../src/init";

program
  .name(name)
  .description(description)
  .version(version)
  .addCommand(new InitProgram());

program.parse(process.argv);
