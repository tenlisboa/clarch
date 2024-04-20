import { Cmd } from "./command";
import { PathResolver } from "./path-resolver";

export class CommandManager {
  public readonly workdir: string;
  private commands: Cmd[] = [];

  constructor(workdir: string) {
    this.workdir = PathResolver.resolve(workdir);
  }

  addCommand(commandName: string, args?: string[]) {
    this.commands.push(new Cmd(this.workdir, commandName, args ?? []));
  }

  public runInChain() {
    const first = this.commands.shift();

    if (first) first.run();

    if (this.commands.length > 0) {
      this.runInChain();
    }
  }
}
