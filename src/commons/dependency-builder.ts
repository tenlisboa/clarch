import { Dependency } from "./dependency";

export class DependencyBuilder {
  private dependencies: Dependency[] = [];

  public add(name: string, version?: string): DependencyBuilder {
    this.dependencies.push(new Dependency(name, version));

    return this;
  }

  public isEmpty(): boolean {
    return this.dependencies.length <= 0;
  }

  public build(): string[] {
    return this.dependencies.map(dependency => dependency.toString());
  }
}
