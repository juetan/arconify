// docs/node_modules/prismjs/plugins/highlight-keywords/prism-highlight-keywords.js
(function() {
  if (typeof Prism === "undefined") {
    return;
  }
  Prism.hooks.add("wrap", function(env) {
    if (env.type !== "keyword") {
      return;
    }
    env.classes.push("keyword-" + env.content);
  });
})();
//# sourceMappingURL=prismjs_plugins_highlight-keywords_prism-highlight-keywords.js.map
