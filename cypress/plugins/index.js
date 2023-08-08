/// <reference types = "cypress" />

// require('dotenv').config()
require('dotenv').config({path: `${process.cwd()}/cypress/support/config/local.env`})
// const dotenvPlugin = require('cypress-dotenv')

module.exports = {on, config} => {
    // config.env.HOST = process.env.CYPRESS_HOST
    config = dotenvPlugin(config)
    return config;
}