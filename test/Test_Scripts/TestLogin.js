let LoginPage = require('../PageObjects/LoginPage');

describe('Page objects', function(){

    it('Test Login Page', function(){
        browser.url('https://the-internet.herokuapp.com/login');
        
        LoginPage.userName.setValue('tomsmith');
        LoginPage.password.setValue('SuperSecretPassword!');
        LoginPage.loginButton.click();

        browser.pause(3000);
    })
})