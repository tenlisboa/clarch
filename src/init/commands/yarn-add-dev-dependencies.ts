import { Command } from "../../contracts/command";
import { devDependencies } from "../dependencies";

export class YarnAddDevDependencies extends Command {
  protected name = "add";
  protected args = ["-D", ...devDependencies];
}
