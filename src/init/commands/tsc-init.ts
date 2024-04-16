import { Command } from "../../contracts/command";

export class TscInit extends Command {
  protected name = "tsc";
  protected args = ["--init"];
}
