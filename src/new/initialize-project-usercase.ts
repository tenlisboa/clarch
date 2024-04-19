import { existsSync, mkdirSync } from "node:fs";
import { CommandManager } from "../commons/command-manager";

export class InitializeProjectUsecase {
  constructor(private readonly commandManager: CommandManager) {}

  execute() {
    this.createFolderIfNotExists();

    this.commandManager.runInChain();
  }

  private createFolderIfNotExists() {
    if (!existsSync(this.commandManager.workdir)) {
      mkdirSync(this.commandManager.workdir, { recursive: true });
    }
  }
}
