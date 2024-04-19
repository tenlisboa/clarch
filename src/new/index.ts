import { input } from "@inquirer/prompts";
import { Command } from "commander";
import { CommandFlowStore } from "../commons/command-flow-builder";
import { Cmd } from "../commons/command";
import { devDependencies } from "./dependencies";
import { CommandManager } from "../commons/command-manager";
import { InitializeProjectUsecase } from "./initialize-project-usercase";

export class InitializeProjectStructureCommand extends Command {
  constructor() {
    super();
    this.name("new").action(async () => {
      const workdir = await input({
        message: "What is the project name/directory?",
      });

      const commandStore = new CommandFlowStore(workdir);

      commandStore.add(new Cmd(workdir, "yarn", ["init", "-y"]));
      commandStore.add(
        new Cmd(workdir, "yarn", ["add", "-D", ...devDependencies]),
      );
      commandStore.add(new Cmd(workdir, "yarn", ["tsc", "--init"]));
      commandStore.add(new Cmd(workdir, "mkdir", ["src"]));

      const commandManager = new CommandManager(commandStore);

      const usecase = new InitializeProjectUsecase(commandManager);

      usecase.execute();
    });
  }
}
