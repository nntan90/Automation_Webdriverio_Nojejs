describe('API command', function (){
    const JS_CONFIRM_BTN = '[onclick="jsConfirm()"]';
    const RESULT = '#result';

    it('get color of result', function (){
        browser.url('https://the-internet.herokuapp.com/javascript_alerts');

        $(JS_CONFIRM_BTN).waitForDisplayed(50000);

        $(JS_CONFIRM_BTN).click();
        browser.acceptAlert();

        $(RESULT).waitForDisplayed(50000);
        let resultColor = $(RESULT).getCSSProperty('color');

        console.log(resultColor.parsed.hex);

    })

})