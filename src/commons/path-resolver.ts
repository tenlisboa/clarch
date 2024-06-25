import { isAbsolute, resolve } from "node:path";

export class PathResolver {
  public static resolve(folder: string) {
    return isAbsolute(folder) ? folder : resolve(process.cwd(), folder);
  }
}
