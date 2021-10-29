/// <reference types = "cypress"/>

import SauceLogin from '../pages/sauce_login.page'



describe("teste de Login Swag Lab", () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com')
    })

    it("Logar corretamente no Swaglab", ()=> {
        SauceLogin.logar('standard_user')
        SauceLogin.validarUrl()
    })
    it('Login incorreto', ()=> {
        SauceLogin.logar('user_errado')
        SauceLogin.validarLoginIncorreto()
    })

    


})