let expect = require('chai').expect;
let SecureAreaPage = require('./SecureAreaPage.js');
let Base = require('./Base.js')

const LOGIN_TITLE = 'h2'
const USERNAME_FIELD = '#username';
const PASSWORD_FIELD = '#password';
const LOGIN_BTN = '[type="submit"]';

class LoginPage extends Base {

    getPageTitle(){
        return $(LOGIN_TITLE).getText();
    }

    inputUserName(userName){
        $(USERNAME_FIELD).setValue(userName);
        return this;
    }

    inputPassword(password){
        $(PASSWORD_FIELD).setValue(password);
        return this;
    }

    clickOnLoginBtn(){
        $(LOGIN_BTN).click();
        return SecureAreaPage;
    }

    verifyLoginTitle(){
        let actualLoginTitle = this.getPageTitle();
        let expectLoginTitle = 'Login Page';
        expect(actualLoginTitle).to.equal(expectLoginTitle, '=====> ERR: Login Title is incorrect');
    }

}
module.exports = new LoginPage();