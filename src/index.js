#!/usr/bin/env node

const inquirer = require("inquirer");
const simpleGit = require("simple-git");
const { options } = require("./config/simple-git");
const { commitMessage, commitType } = require("./config/inquirer");

simpleGit().clean(simpleGit.CleanOptions.FORCE);

inquirer.registerPrompt("search-list", require("inquirer-search-list"));
inquirer.registerPrompt(
  "maxlength-input",
  require("inquirer-maxlength-input-prompt")
);

const git = simpleGit(options);

inquirer.prompt([commitType, commitMessage]).then((answers) => {
  const commit = `${answers.commitMessage}`;
  return git.commit(commit);
});

module.exports = inquirer;
