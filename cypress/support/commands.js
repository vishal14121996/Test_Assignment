// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('openSpecificBrowser', (browserName) => {
    if (browserName === 'chrome') {
      // Open Chrome browser
      cy.visit('/', {
        browser: 'chrome',
        // Add any additional Chrome-specific options here
      });
    } else if (browserName === 'firefox') {
      // Open Firefox browser
      cy.visit('/', {
        browser: 'firefox',
        // Add any additional Firefox-specific options here
      });
    } else if (browserName === 'safari') {
      // Open Safari browser
      cy.visit('/', {
        browser: 'safari',
        // Add any additional Safari-specific options here
      });
    } else {
      throw new Error(`Invalid browser name: ${browserName}`);
    }
  });
  