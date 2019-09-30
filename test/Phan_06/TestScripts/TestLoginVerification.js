let loginData = require('../TestData/TestLogin.json')
let baseData = require('../TestData/BaseData.json')
let LoginPage = require('../PageObjects/LoginPage.js')
let expect = require('chai').expect

describe('Page Object Action Chains', function () {

    before('BEFORE SUITE: OPEN URL', function () {
        LoginPage.openPage(baseData.pageUrl);
    })

    it('Verify Page Title Is Correct', function () {
        let actualResult = LoginPage.getPageTitle();
        let expectResult = 'Login Page@';

        expect(actualResult).to.equal(expectResult, '==?> ERR: Wrong text');

    })
})