import { isAbsolute } from "node:path";

export class PathResolver {
  public static resolve(folder: string) {
    return isAbsolute(folder) ? folder : process.cwd() + "/" + folder;
  }
}
