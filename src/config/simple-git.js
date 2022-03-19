const simpleGit = require("simple-git");

function configureGit() {
  const options = {
    baseDir: process.cwd(),
    binary: "git",
    maxConcurrentProcesses: 6,
  };

  const git = simpleGit(options);

  return git;
}

module.exports = { configureGit };
