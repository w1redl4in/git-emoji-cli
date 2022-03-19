function addScopeToCommit(commitType, scope, input) {
  const [semanticCommit] = commitType.split(" ");

  const semanticCommitWithScope = semanticCommit.replace(
    ":",
    `(${scope}): ${input}`
  );

  return semanticCommitWithScope;
}

module.exports = { addScopeToCommit };
