function addScopeToCommit(commitType, scope, input) {
  const [semanticCommit, emoji] = commitType.split(" ");

  const semanticCommitWithScope = semanticCommit.replace(
    ":",
    `(${scope}): ${emoji} ${input}`
  );

  return semanticCommitWithScope;
}

module.exports = { addScopeToCommit };
