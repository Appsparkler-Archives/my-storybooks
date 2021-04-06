#!/usr/bin/env node

const { execSync } = require("child_process");
const path = require("path");

execSync("yarn sb-bs-5", {
  stdio: [0, 1, 2],
  cwd: path.resolve("../.."),
});
console.log("Hello World");
