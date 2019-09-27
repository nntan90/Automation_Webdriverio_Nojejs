describe('API command for getText', function (){
    const JS_CONFIRM_BTN = '[onclick = "jsConfirm()"]';
    const RESULT = '#result'

    it('get result when clicking on OK', function (){
        browser.url('https://the-internet.herokuapp.com/javascript_alerts');
        $(JS_CONFIRM_BTN).waitForDisplayed(50000);
        
        $(JS_CONFIRM_BTN).click();
        browser.acceptAlert();

        let result = browser.getElementText(RESULT);

        console.log(result);

    })
    it('get result when clicking on OK', function (){
        $(JS_CONFIRM_BTN).click();
        browser.dismissAlert();

        let result = browser.getElementText(RESULT);

        console.log(result);
    })
})