import { Command } from "commander";
import { Init } from "./init";
import { TscInit } from "./commands/tsc-init";
import { YarnInit } from "./commands/yarn-init";
import { YarnAddDevDependencies } from "./commands/yarn-add-dev-dependencies";
import { MkdirSrc } from "./commands/create-initial-structure";

export class InitProgram extends Command {
  constructor() {
    super();
    this.name("init")
      .argument("<name>", "Project name")
      .action(name => {
        const commands = [
          new YarnInit(name),
          new YarnAddDevDependencies(name),
          new TscInit(name),
          new MkdirSrc(name),
        ];
        new Init(name, commands).run();
      });
  }
}
