const { build } = require("esbuild");
const { dependencies, peerDependencies } = require("./package.json");

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
