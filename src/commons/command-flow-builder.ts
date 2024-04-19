import { Command } from "./command";

export class CommandFlowStore {
  private commands: Command[] = [];

  public add(command: Command) {
    this.commands.push(command);
  }

  public unqueue(): Command | null {
    const first = this.commands.shift();

    return first ?? null;
  }

  public ended(): boolean {
    return this.commands.length <= 0;
  }

  public extract(): Command[] {
    return this.commands;
  }
}
