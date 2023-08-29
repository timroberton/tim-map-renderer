// ex. scripts/build_npm.ts
import { build, emptyDir } from "https://deno.land/x/dnt@0.38.1/mod.ts";

await emptyDir("./npm");

await build({
  entryPoints: ["./src/mod.ts"],
  outDir: "./npm",
  typeCheck: false,
  test: false,
  declaration: "inline",
  scriptModule: false,
  skipSourceOutput: true,
  esModule: true,
  shims: {
    // see JS docs for overview and more options
    deno: true,
  },
  package: {
    // package.json properties
    name: "tim-map-renderer",
    version: "0.0.1",
  },
  postBuild() {},
});
