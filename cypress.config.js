const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // igonre some comments 
    chromeWebSecurity: false,
    watchForFileChanges: false,

    // Take full page size 
    viewportWidth: 1920,
    viewportHeight: 1080,
  },
});
