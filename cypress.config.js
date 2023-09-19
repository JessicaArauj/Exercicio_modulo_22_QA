// const { defineConfig } = require('cypress')

// module.exports = defineConfig({

//   e2e: {
//     baseUrl: 'http://lojaebac.ebaconline.art.br',
//     reporter: 'mochawesome',
//     reporterOptions: {
//     reportDir: 'mochawesome-report',
//     overwrite: false,
//     html: false,
//     json: true
//     }
//   }
// });

// versão desatualizada do framework
// {
//   "env": {
//     "baseUrl": "http://lojaebac.ebaconline.art.br"
//   }
// }

// versão atual doc https://docs.cypress.io/api/cypress-api/env#__docusaurus_skipToContent_fallback

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    baseUrl: "http://lojaebac.ebaconline.art.br",
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
