const USERNAME_FIELD = '#username';
const PASSWORD_FIELD = '#password';
const LOGIN_BTN = '[type="submit"]';

class LoginPage {

    inputUserName(userName){
        $(USERNAME_FIELD).setValue(userName);
    }

    inputPassword(password){
        $(PASSWORD_FIELD).setValue(password);
    }

    clickOnLoginBtn(){
        $(LOGIN_BTN).click();
    }

}
module.exports = new LoginPage();