/// <reference types="cypress" />

describe('Enviroment Variables', () => {

    before(() => {
        // cy.visit(Cypress.env('HOST'))
        cy.visit(Cypress.env('baseUrl'))
    })

    it('Cypress.config.js', () => {
        cy.url().should('eq', 'http://lojaebac.ebaconline.art.br/')
        // cy.url().should('contain', Cypress.env('HOST'))
    });

    // it('Config Test Env', () => {
    //     env: {
    //         myEnv: 'local'
    //     }
    // }, () => {
    //     cy.log(Cypress.env('myEnv'))
    // });

});


