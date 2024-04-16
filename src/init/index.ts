import { Command } from "commander";
import { Init } from "./init";
import { TscInit } from "./commands/tsc-init";

export class InitProgram extends Command {
  constructor() {
    super();
    this.name("init")
      .argument("<name>", "Project name")
      .action(name => {
        const commands = [new TscInit()];
        new Init(name, commands).run();
      });
  }
}
