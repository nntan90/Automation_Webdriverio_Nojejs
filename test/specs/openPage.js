describe('API command', function(){
    it('Open page API', function(){
        browser.url('https://google.com');
        $('[name="q"]').waitForDisplayed(3000, false, 'not found');
        $('[name="q"]').setValue('Test');
    });
});