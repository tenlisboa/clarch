import { Command } from "../../contracts/command";

export class YarnInit extends Command {
  protected name = "init";
  protected args = ["-y"];
}
