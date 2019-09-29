let LoginPage = require('../PageObjects/LoginPage_3.js')

describe('Page Object Type 3', function(){

    it('Test Login To Page', function(){
        let userName = 'tomsmith';
        let password = 'SuperSecretPassword!';
        let url = 'https://the-internet.herokuapp.com/login';

        browser.url(url);
        LoginPage.inputUserName(userName);
        LoginPage.inputPassword(password);
        LoginPage.clickOnLoginBtn();
        
        browser.pause(3000);
    })
})