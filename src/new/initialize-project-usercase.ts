import { existsSync, mkdirSync } from "node:fs";
import { CommandManager } from "../commons/command-manager";
import { DependencyBuilder } from "../commons/dependency-builder";

export class InitializeProjectUsecase {
  constructor(
    private readonly commandManager: CommandManager,
    private readonly dependencyBuilder: DependencyBuilder,
    private readonly developmentDependencyBuilder: DependencyBuilder,
  ) {}

  execute(input: InitializeProjectUsecaseInput) {
    this.setupTypescript(input);
    this.setupLinter(input);
    this.setupTestLibrary(input);

    this.commandManager.addCommand("yarn", ["init", "-y"]);

    if (!this.dependencyBuilder.isEmpty())
      this.commandManager.addCommand("yarn", [
        "add",
        ...this.dependencyBuilder.build(),
      ]);

    if (!this.developmentDependencyBuilder.isEmpty())
      this.commandManager.addCommand("yarn", [
        "add",
        "-D",
        ...this.developmentDependencyBuilder.build(),
      ]);

    if (input.useTypescript)
      this.commandManager.addCommand("yarn", ["tsc", "--init"]);

    this.commandManager.addCommand("mkdir", ["src"]);

    this.createFolderIfNotExists();

    this.commandManager.runInChain();
  }

  private setupTestLibrary({
    testLibrary,
    useTypescript,
  }: InitializeProjectUsecaseInput) {
    switch (testLibrary) {
      case "jest":
        this.developmentDependencyBuilder.add("jest");
        if (useTypescript) this.developmentDependencyBuilder.add("ts-jest");
        break;
      default:
        break;
    }
  }

  private setupLinter({
    configureLinter,
    useTypescript,
  }: InitializeProjectUsecaseInput) {
    if (!configureLinter) return;

    this.developmentDependencyBuilder
      .add("eslint")
      .add("eslint-config-prettier")
      .add("eslint-plugin-import")
      .add("eslint-plugin-n")
      .add("eslint-plugin-promise")
      .add("prettier");

    if (!useTypescript) return;

    this.developmentDependencyBuilder
      .add("eslint-config-standard-with-typescript")
      .add("@typescript-eslint/eslint-plugin")
      .add("@typescript-eslint/parser");
  }

  private setupTypescript({ useTypescript }: InitializeProjectUsecaseInput) {
    if (!useTypescript) return;

    this.developmentDependencyBuilder.add("typescript").add("esbuild");
  }

  private createFolderIfNotExists() {
    if (!existsSync(this.commandManager.workdir)) {
      mkdirSync(this.commandManager.workdir, { recursive: true });
    }
  }
}

interface InitializeProjectUsecaseInput {
  workdir: string;
  useTypescript: boolean;
  configureLinter: boolean;
  testLibrary: string | null;
}
