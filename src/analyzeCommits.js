exports.analyzeCommits = (pluginConfig, context) => {
  return context.env.FORCE_PUBLISH;
};
