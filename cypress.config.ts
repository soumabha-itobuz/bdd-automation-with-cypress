import { defineConfig } from "cypress";
// import esbuild plugin
import { createEsbuildPlugin } from "./node_modules/@badeball/cypress-cucumber-preprocessor/dist/subpath-entrypoints/esbuild";
// import cucumber plugin
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";

// Create Bundler
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";

import { dotenvPlugin } from "cypress-dotenv";

module.exports = defineConfig({
  chromeWebSecurity: false,
  experimentalWebKitSupport: true,
  screenshotsFolder: "cypress/screenshots",
  videosFolder: "cypress/reports/videos",
  video: true,
  viewportWidth: 1280, // depend upon your requirement
  viewportHeight: 1000, // depend upon your requirement
  defaultCommandTimeout: 90000,
  execTimeout: 90000,
  pageLoadTimeout: 90000,
  taskTimeout: 90000,
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports",
    charts: true,
    html: true,
    json: false,
    embeddedScreenshots: true,
    inlineAssets: true,
  },
  e2e: {
    specPattern: `cypress/e2e/features/**/*.feature`,
    setupNodeEvents(on, config) {
      // add cucumber preprocessor in the events
      require("cypress-mochawesome-reporter/plugin")(on);
      addCucumberPreprocessorPlugin(on, config);
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );
      config = dotenvPlugin(config);
      return config;
    },
  },
});
