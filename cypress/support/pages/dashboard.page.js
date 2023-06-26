/// <reference types = "cypress" />

export const DashboardPage = {
    get minhaPage () {return cy.get(`#main > div > div > p:nth-child(3)`)}
}