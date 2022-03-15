const { configureInquirer, commitType, commitMessage } = require("./inquirer");
const { configureGit } = require("./simple-git");

function configure() {
  const git = configureGit();

  const inquirer = configureInquirer();

  return { git, inquirer };
}

function initialize() {
  const { git, inquirer } = configure();

  return inquirer.prompt([commitType, commitMessage]).then((answers) => {
    const { commitMessage } = answers;

    return git
      .outputHandler((_, stdout, stderr) => {
        stdout.pipe(process.stdout);
        stderr.pipe(process.stderr);
      })
      .commit(commitMessage);
  });
}

module.exports = { configure, initialize };
