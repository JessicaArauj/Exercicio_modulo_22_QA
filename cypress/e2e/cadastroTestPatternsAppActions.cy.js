/// <reference types = "cypress" />


describe('Realizar novo cadastro', () => {

    beforeEach(() => {
        cy.checkout(data.email, data.password)
    });

    it('Validar acesso a pagina checkout', () => {
        cy.validateString('Você tem um cupom de desconto?');
    });

});