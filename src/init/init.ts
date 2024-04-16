import { spawnSync } from "child_process";
import { mkdirSync, existsSync } from "fs";
import { devDependencies } from "./dependencies";
import { Command } from "../contracts/command";

export class Init {
  constructor(
    private folder: string,
    private commands: Command[],
  ) {}

  public async run() {
    this.createFolderIfNotExists();

    spawnSync("yarn", ["add", "-D", ...devDependencies], {
      stdio: "inherit",
      cwd: this.folder,
    });

    const commandsPromises = this.commands.map(command => command.run());

    await Promise.all(commandsPromises);
  }

  private createFolderIfNotExists() {
    if (!existsSync(this.folder)) {
      mkdirSync(this.folder, { recursive: true });
    }
  }
}
