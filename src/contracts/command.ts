import { spawnSync } from "child_process";

export abstract class Command {
  protected abstract readonly name: string;
  protected abstract readonly args: string[];
  protected readonly packager: string = "yarn";

  public run() {
    spawnSync(this.packager, [this.name, ...this.args], { stdio: "inherit" });
  }
}
