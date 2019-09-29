let LoginPage = require('../PageObjects/LoginPageActionChains.js')

describe('Page Object Action Chains', function () {

    it('Test Login Page', function () {
        let userName = 'tomsmith';
        let password = 'SuperSecretPassword!';
        let pageUrl = 'https://the-internet.herokuapp.com/login';

        LoginPage
            .openPage(pageUrl)
            .inputUserName(userName)
            .inputPassword(password)
            .clickOnLoginBtn()
            .verifyTextH2();

        browser.pause(3000);

    })
})