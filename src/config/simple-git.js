const simpleGit = require("simple-git");

function configureGit() {
  simpleGit().clean(simpleGit.CleanOptions.FORCE);

  const options = {
    baseDir: process.cwd(),
    binary: "git",
    maxConcurrentProcesses: 6,
  };

  const git = simpleGit(options);

  return git;
}

module.exports = { configureGit };
