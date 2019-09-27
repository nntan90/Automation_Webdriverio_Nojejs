
describe('API command',function(){  
    it('Login Form', function(){
        //open page
        browser.url('https://the-internet.herokuapp.com/login');

        //cho visible
        const USERNAME_TXTBX =  '#username';
        $(USERNAME_TXTBX).waitForDisplayed(5000, false, 'username not found');
        $(USERNAME_TXTBX).setValue('tomsmith');

        const PASSWORD_TXTBX = '#password';
        $(PASSWORD_TXTBX).waitForDisplayed(5000, false, 'password not found');
        $(PASSWORD_TXTBX).setValue('SuperSecretPassword!')

        const LOGIN_BTN = '[type="submit"]';
        $(LOGIN_BTN).waitForDisplayed(5000, false, 'button not found');
        $(LOGIN_BTN).click();

        browser.pause(3000);
    });
})