import { spawnSync } from "node:child_process";

export class Cmd {
  constructor(
    private readonly workdir: string,
    private readonly cmd: string,
    private readonly args: string[],
  ) {}

  public run() {
    console.log("running");
    spawnSync(this.cmd, [...this.args], {
      stdio: "inherit",
      cwd: this.workdir,
    });
    console.log("finished");
  }
}
