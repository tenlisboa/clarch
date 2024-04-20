import { input, select, confirm } from "@inquirer/prompts";
import { Command } from "commander";
import { CommandManager } from "../commons/command-manager";
import { InitializeProjectUsecase } from "./initialize-project-usercase";
import { DependencyBuilder } from "../commons/dependency-builder";

export class InitializeProjectStructureCommand extends Command {
  constructor() {
    super();
    this.name("new").action(async () => {
      const workdir = await input({
        message: "What is the project name/directory?",
      });

      const useTypescript = await confirm({
        message: "Use typescript?",
      });

      const configureLinter = await confirm({
        message: "Configure EsLint and Prettier?",
      });

      const testLibrary = await select({
        message: "Which test library?",
        choices: [
          {
            value: "jest",
            name: "Jest",
          },
          {
            value: null,
            name: "None",
          },
        ],
      });

      const commandManager = new CommandManager(workdir);
      const dependencyBuilder = new DependencyBuilder();
      const devDependencyBuilder = new DependencyBuilder();
      const usecase = new InitializeProjectUsecase(
        commandManager,
        dependencyBuilder,
        devDependencyBuilder,
      );

      usecase.execute({
        workdir,
        useTypescript,
        configureLinter,
        testLibrary,
      });
    });
  }
}
