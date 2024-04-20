import { input } from "@inquirer/prompts";
import { Command } from "commander";
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

      const commandManager = new CommandManager(workdir);

      commandManager.addCommand("yarn", ["init", "-y"]);
      commandManager.addCommand("yarn", ["add", "-D", ...devDependencies]);
      commandManager.addCommand("yarn", ["tsc", "--init"]);
      commandManager.addCommand("mkdir", ["src"]);

      const usecase = new InitializeProjectUsecase(commandManager);

      usecase.execute();
    });
  }
}
