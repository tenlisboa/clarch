import { mkdirSync, existsSync } from "fs";
import { Command } from "../contracts/command";
import { isAbsolute } from "path";

export class Init {
  private folder: string;

  constructor(
    folder: string,
    private commands: Command[],
  ) {
    this.folder = isAbsolute(folder) ? folder : process.cwd() + "/" + folder;
  }

  public run() {
    this.createFolderIfNotExists();

    this.executeCommandsInChain();
  }

  private executeCommandsInChain() {
    const first = this.commands.shift();

    if (first) first.run();

    if (this.commands.length > 0) {
      this.executeCommandsInChain();
    }
  }

  private createFolderIfNotExists() {
    if (!existsSync(this.folder)) {
      mkdirSync(this.folder, { recursive: true });
    }
  }
}
