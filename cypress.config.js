const { defineConfig } = require("cypress");
const { configureAllureAdapterPlugins } = require("@mmisty/cypress-allure-adapter/plugins")

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://countries.trevorblades.com/",
    failOnStatusCode: false,
    specPattern: "**/*.cy.js",
    viewportWidth: 1920,
    viewportHeight: 1080,
    setupNodeEvents(on, config) {
      configureAllureAdapterPlugins(on, config);

      return config;
    },
  },
});
