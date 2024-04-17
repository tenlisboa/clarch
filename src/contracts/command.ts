import { spawnSync } from "child_process";

export abstract class Command {
  protected abstract readonly name: string;
  protected abstract readonly args: string[];
  protected readonly commandName: string = "yarn";

  constructor(protected readonly folder: string) {}

  public run() {
    spawnSync(this.commandName, [this.name, ...this.args], {
      stdio: "inherit",
      cwd: this.folder,
    });
  }
}
