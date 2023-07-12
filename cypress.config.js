const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  retries: {
    "runMode": 1,
    "openMode": 0
  },
  reporter: 'cypress-mochawesome-reporter', //for HTML report
  e2e: {
    baseUrl: "https://www.google.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
     
      screenshotOnRunFailure=true; // this for screenshot into the testreport for Moachaaswesome

      require('cypress-mochawesome-reporter/plugin')(on);//html report
    },
  },
});
