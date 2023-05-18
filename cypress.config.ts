import { defineConfig } from "cypress";
export default defineConfig({
  chromeWebSecurity: true,
  defaultCommandTimeout: 70000,
  modifyObstructiveCode: false,
  numTestsKeptInMemory: 0,
  requestTimeout: 70000,
  responseTimeout: 70000,
  viewportHeight: 1080,
  viewportWidth: 1920,
  watchForFileChanges: false,

  e2e: {
    baseUrl: 'http://localhost:3000/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
