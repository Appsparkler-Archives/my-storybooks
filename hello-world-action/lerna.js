const { execSync } = require("child_process");
const fs = require("fs");
fs.writeFileSync("./changed.json", "");
console.log(Object.keys(fs));
execSync("lerna changed --json | ./changed.json");
