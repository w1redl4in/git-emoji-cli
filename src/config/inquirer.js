const chalk = require("chalk");
const { commits } = require("./utils/commits");

const commitType = {
  type: "search-list",
  name: "commitType",
  value: "",
  message: "Choose a commit type:",
  choices: commits,
};

const commitMessage = {
  type: "maxlength-input",
  name: "commitMessage",
  message: "Write a commit message:",
  maxLength: 70,
  filter(input, answers) {
    return `${answers.commitType} ${input}`;
  },
  transformer(input, answers) {
    return chalk.green(`${answers.commitType} `) + input;
  },
};

module.exports = { commitType, commitMessage };
