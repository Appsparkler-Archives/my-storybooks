/**
 *
 * @param {String} packageName Package Name
 * @returns Boolean
 */
module.exports = (packageName = "") => {
  const { execSync } = require("child_process");
  const lernaChangedCommand = "npx lerna changed --json";
  const buffer = execSync(lernaChangedCommand);
  const changedFiles = JSON.parse(buffer.toString());
  return changedFiles.reduce((loop, package) => {
    if (loop) return loop;
    if (package.name === packageName) return true;
    return false;
  }, false);
};
