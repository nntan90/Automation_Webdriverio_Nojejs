let SecureAreaPage = require('./SecureAreaPage.js');
let Base = require('./Base.js')
const USERNAME_FIELD = '#username';
const PASSWORD_FIELD = '#password';
const LOGIN_BTN = '[type="submit"]';

class LoginPage extends Base {

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

}
module.exports = new LoginPage();