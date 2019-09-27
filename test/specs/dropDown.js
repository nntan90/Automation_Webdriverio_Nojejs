describe('API command test dropdown',function(){
    const DROPDOWN_MENU = '#dropdown'
    it('select by visible text',function(){
        browser.url('https://the-internet.herokuapp.com/dropdown');

        $(DROPDOWN_MENU).waitForDisplayed(50000, false, 'dropdown not found');
        $(DROPDOWN_MENU).selectByVisibleText('Option 1');

        browser.pause(3000);

    });

    it('select by value',function(){
        $(DROPDOWN_MENU).selectByAttribute('value','2');
        browser.pause(3000);
    });

    it('select by index',function(){
        $(DROPDOWN_MENU).selectByIndex(1);
        browser.pause(3000);
    });


})