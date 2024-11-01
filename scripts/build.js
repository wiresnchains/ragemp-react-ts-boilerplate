const esbuild = require("esbuild");
const jetpack = require("fs-jetpack");
const { sassPlugin } = require("esbuild-sass-plugin");

const SOURCE_DIR = "./src";
const TARGET_DIR = "./dist";

function buildServer() {
    let serverSrcDir = jetpack.path(SOURCE_DIR, "server");

    esbuild.build({
        entryPoints: [jetpack.path(serverSrcDir, "index.ts")],
        outfile: jetpack.path(TARGET_DIR, "packages", "framework", "index.js"),
        platform: "node",
        bundle: true,
        minifyWhitespace: true
    });

    jetpack.copy(jetpack.path(serverSrcDir, "conf.json"), jetpack.path(TARGET_DIR, "conf.json"), { overwrite: true });
    jetpack.copy(jetpack.path(serverSrcDir, ".env"), jetpack.path(TARGET_DIR, ".env"), { overwrite: true });
}

function buildCef() {
    let cefSrcDir = jetpack.path(SOURCE_DIR, "cef");
    let cefTargetDir = jetpack.path(TARGET_DIR, "client_packages", "cef");

    esbuild.build({
        entryPoints: [jetpack.path(cefSrcDir, "index.tsx")],
        outfile: jetpack.path(cefTargetDir, "index.js"),
        platform: "browser",
        bundle: true,
        loader: { ".png": "dataurl", ".jpg": "dataurl", ".svg": "dataurl", ".ttf": "dataurl" },
        plugins: [sassPlugin()]
    });

    jetpack.copy(jetpack.path(cefSrcDir, "public", "index.html"), jetpack.path(cefTargetDir, "index.html"), { overwrite: true });
}

function buildClient() {
    let clientSrcDir = jetpack.path(SOURCE_DIR, "client");

    esbuild.build({
        entryPoints: [jetpack.path(clientSrcDir, "index.ts")],
        outfile: jetpack.path(TARGET_DIR, "client_packages", "index.js"),
        platform: "neutral",
        bundle: true,
        minifyWhitespace: true
    });

    buildCef();
}

buildServer();
buildClient();
