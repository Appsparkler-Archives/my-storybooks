const globby = require("globby");
const rimraf = require("rimraf");

const clean = async ({ glob, ignored }) => {
  const refinedIgnoredFilesGlob = ignored.map((f) => `!${f}`);
  const finalGlob = [...glob, ...refinedIgnoredFilesGlob];
  const pathsToRimraf = await globby(finalGlob);
  pathsToRimraf.forEach((path) => rimraf.sync(path));
};

(function cleanReactMarkJS() {
  const filesToDelete = ["../react-mark.js/**/*.*"];

  const ignoredFiles = [
    "../react-mark.js/package.json",
    "../react-mark.js/README.md",
  ];

  clean({ glob: filesToDelete, ignored: ignoredFiles });
})();
