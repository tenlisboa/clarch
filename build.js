const { build } = require("esbuild");
const { dependencies, peerDependencies } = require("./package.json");

build({
  entryPoints: ["bin/clarch.ts"],
  bundle: true,
  minify: true,
  external: Object.keys(dependencies).concat(Object.keys(peerDependencies)),
  platform: "node",
  metafile: true,
  outfile: "dist/bin/clarch.js",
});
