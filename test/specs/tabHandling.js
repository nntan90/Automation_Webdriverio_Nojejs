describe('API command', function(){
    const EDIT_BTN = '[class="edit-page-link button"]';

    it('tab handling', function(){
        //Open page
        browser.url('https://webdriver.io/docs/api.html');
        $(EDIT_BTN).waitForDisplayed(30000);

        //Click Edit button => 2 tab
        $(EDIT_BTN).click();

        //Get all TabIds
        let tabIds = browser.getWindowHandle()[1];
        console.log('=============> Tab Ids: ', tabIds);
        //Get Page Title 1
        let pageTitle1 = browser.getTitle();
        console.log('++++++++++++++ Title page 1: ', pageTitle1);
        //console.log('===============?>', tabIds);

        //Switch to new tab
        browser.switchToWindow(tabIds);

        //Get page title 2
        let pageTitle2 = browser.getTitle();
        console.log('==============> Title page 2: ', pageTitle2);

    })
})