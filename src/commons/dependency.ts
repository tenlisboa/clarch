export class Dependency {
  constructor(
    public readonly name: string,
    public readonly version?: string,
  ) {}

  public toString() {
    const semgrep = this.version ? `@${this.version}` : "";

    return this.name + semgrep;
  }
}
