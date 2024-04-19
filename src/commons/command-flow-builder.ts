import { Cmd } from "./command";

export class CommandFlowStore {
  private commands: Cmd[] = [];

  constructor(public readonly workdir: string) {}

  public add(command: Cmd) {
    this.commands.push(command);
  }

  public unqueue(): Cmd | null {
    const first = this.commands.shift();

    return first ?? null;
  }

  public ended(): boolean {
    return this.commands.length <= 0;
  }

  public extract(): Cmd[] {
    return this.commands;
  }
}
