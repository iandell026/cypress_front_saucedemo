import Base from './_base.page'

const INP_USERNAME = '#user-name';
const INP_PASSWORD = '#password';
const BTN_LOGIN = '#login-button';
const TXT_ERROR = '[data-test=error]';
const URL          = '/inventory.html';

export default class SauceLogin extends Base {

    static acessarSauceDemo(){
        cy.visit('//https:www.saucedemo.com')
    }

    static logar(usuario){
        super.typeValue(INP_USERNAME, usuario)
        super.typeValue(INP_PASSWORD, 'secret_sauce')
        super.clickOnElement(BTN_LOGIN)
    }
    static validarUrl(){
        super.validarUrl(URL)
    }

    static validarLoginIncorreto(){
        super.validateElementText(TXT_ERROR, 'Epic sadface: Username and password do not match any user in this service')
    }

}