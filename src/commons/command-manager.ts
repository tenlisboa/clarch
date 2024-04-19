import { CommandFlowStore } from "./command-flow-builder";

export class CommandManager {
  constructor(private readonly commandBuilder: CommandFlowStore) {}

  public runInChain() {
    const first = this.commandBuilder.unqueue();

    if (first) first.run();

    if (!this.commandBuilder.ended()) {
      this.runInChain();
    }
  }
}
