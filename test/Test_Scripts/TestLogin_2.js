let LoginPage = require('../PageObjects/LoginPage_2.js');

describe('Page Object Type 2', function(){
    it('Test login page', function(){
        let userName = 'tomsmith';
        let password = 'SuperSecretPassword!';
        let url = 'https://the-internet.herokuapp.com/login';

        browser.url(url);
        LoginPage.loginToPage(userName, password);
        browser.pause(3000);

    })
})