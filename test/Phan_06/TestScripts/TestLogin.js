let loginData = require('../TestData/TestLogin.json')
let baseData = require('../TestData/BaseData.json')
let LoginPage = require('../PageObjects/LoginPage.js')

describe('Page Object Action Chains', function () {

    before('BEFORE SUITE: OPEN URL', function () {
        LoginPage.openPage(baseData.pageUrl);
    })

    afterEach('AFTER EACH: REFRESH PAGE', function () {
        browser.refresh();
    })


    it('Test Login Page With In-Correct Password', function () {
        LoginPage
            .inputUserName(loginData.incorrectCredentials.userName)
            .inputPassword(loginData.incorrectCredentials.password)
            .clickOnLoginBtn();
        browser.pause(3000);
    }) 

    it('Test Login Page With Correct Password', function () {
        LoginPage
            .inputUserName(loginData.correctCredentials.userName)
            .inputPassword(loginData.correctCredentials.password)
            .clickOnLoginBtn()
            .verifyTextH2();
        browser.pause(3000);

    })
})