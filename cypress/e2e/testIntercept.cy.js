/// <reference types="cypress" />
import { homePage } from '../support/pages/home.page';
import { productSearchPage } from '../support/pages/productSearch.page';
const data = require ('../fixtures/cart.json')

describe('Product Search', () => {
    before(() => {
        cy.intercept({
            method: 'GET',
            url: '/wp-admin/admin-ajax*',
            query: {
                term: 'Jacket'
            }
        }, 
        req => {
            req.reply({
                statusCode: 200,
                body: `${req.query.callback}( 
                    ${JSON.stringfy(
                        data.autocompleteSearchData
                    )}
                )`
            })
        }
        )
    });

    beforeEach(() => {
        cy.visit("/")
    })

    it('Search should be return a product searched', () => {
        homePage.searchMagnifier()
        productSearchPage.search('jacket')
        productSearchPage.productList.first().should('have.attr', 'title', 'Ingrid Running Jacket')
    })
})