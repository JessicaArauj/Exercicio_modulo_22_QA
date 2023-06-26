/// <reference types = "cypress" />

export const DashboardPage = {
    get minhaPage () {return cy.get(`//*[@id="main"]/div/div/p[1]/text()[1]`)}
}

// module.exports = new DashboardPage