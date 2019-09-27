describe('API command for Alert', function (){
    const JS_CONFIRM_BUTTON = '[onclick = "jsConfirm()"]';

    it('Alert Accept', function (){
        browser.url('https://the-internet.herokuapp.com/javascript_alerts');
        $(JS_CONFIRM_BUTTON).waitForDisplayed(50000);

        $(JS_CONFIRM_BUTTON).click();
        browser.acceptAlert();

        browser.pause(3000);
    })

    it('Alert Dismiss', function (){
        $(JS_CONFIRM_BUTTON).click();
        browser.dismissAlert();

        browser.pause(3000);

    })

    it('Alert get text content', function (){
        $(JS_CONFIRM_BUTTON).click();
        let alertContent = browser.getAlertText();
        console.log('Text content: ' + alertContent );

    })
})