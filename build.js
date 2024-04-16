const { build } = require("esbuild");
const { dependencies, peerDependencies } = require("./package.json");
const { Generator } = require("npm-dts");

new Generator({
  entry: "bin/clarch.ts",
  output: "dist/bin/clarch.d.ts",
}).generate();

const sharedConfig = {
  entryPoints: ["bin/clarch.ts"],
  bundle: true,
  minify: true,
  external: Object.keys(dependencies).concat(Object.keys(peerDependencies)),
};

build({
  ...sharedConfig,
  platform: "node",
  outfile: "dist/bin/clarch.js",
});
