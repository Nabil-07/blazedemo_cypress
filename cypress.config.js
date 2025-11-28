const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://blazedemo.com',
    specPattern: 'cypress/e2e/**/*.{cy.js,cy.jsx,cy.ts,cy.tsx,spec.js,spec.jsx,spec.ts,spec.tsx,js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
    },
  },
  env: {
    fakeDataEnabled: true
  }
});
