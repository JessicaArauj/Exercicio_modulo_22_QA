/// <reference types = "cypress" />

Cypress.Commands.add('checkout', (email, password) => {

    const fd = new FormData()
    fd.append('log', email)
    fd.append('pwd', password)
    fd.append('customer_login > div:nth-child(2) > form > p:nth-child(4) > input.button', "LOGIN" )
    fd.append('redirect_to', `?wc-ajax=update_order_review`)
    fd.append('testcookie', 1)

    cy.request({
        url: '?wc-ajax=update_order_review',
        method: 'POST',
        body: fd
    }).then(resp => {
        resp.headers['Cookie'].forEach(cookie =>{
            const firstPart = cookie.split(';')[0]
            const divisor = firstPart.indexOf('=')
            const key = firstPart.substring(0, divisor)
            const value = firstPart.substring(divisor+1)
            cy.setCookie(key, value)
        })
    })

    cy.visit('?wc-ajax=update_order_review')
})