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

    get loginBtn(){
        return $(LOGIN_BTN);
    }

    loginToPage(userName, password){
        this.userName.setValue(userName);
        this.password.setValue(password);
        this.loginBtn.click();
    }
}
module.exports = new LoginPage();