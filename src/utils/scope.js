function addScopeToCommit(commitType, scope, input) {
  const [semanticCommit, emoji] = commitType.split(" ");

  const semanticCommitWithScope = semanticCommit.replace(
    ":",
    `(${scope}): ${emoji} ${input}`
  );

  return semanticCommitWithScope;
}

function commitWithoutScope(commitType, input) {
  const [semanticCommit, emoji] = commitType.split(" ");

  const semanticCommitWithScope = semanticCommit.replace(
    ":",
    `: ${emoji} ${input}`
  );

  return semanticCommitWithScope;
}

function DecideToUseScopeOrNot(commitType, scope, input) {
  if (scope === "") {
    return commitWithoutScope(commitType, input);
  }

  return addScopeToCommit(commitType, scope, input);
}

module.exports = { addScopeToCommit, DecideToUseScopeOrNot };
