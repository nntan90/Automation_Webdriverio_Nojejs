const USERNAME_FIELD = '#username';
const PASSWORD_FIELD = '#password';
const LOGIN_BTN = '[type="submit"]';

class LoginPage {

    get userName(){
        return $(USERNAME_FIELD);
    }

    get password(){
        return $(PASSWORD_FIELD);
    }
    
    get loginButton(){
        return $(LOGIN_BTN);
    }
}
module.exports = new LoginPage();