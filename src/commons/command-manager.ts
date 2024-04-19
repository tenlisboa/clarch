import { CommandFlowStore } from "./command-flow-builder";

export class CommandManager {
  public workdir: string;

  constructor(private readonly commandFlowStore: CommandFlowStore) {
    this.workdir = commandFlowStore.workdir;
  }

  public runInChain() {
    const first = this.commandFlowStore.unqueue();

    console.log(first);
    if (first) first.run();

    if (!this.commandFlowStore.ended()) {
      this.runInChain();
    }
  }
}
