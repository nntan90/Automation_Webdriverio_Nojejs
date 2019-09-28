describe('API command', function(){

    it('save screenshot', function(){
        //open page
            browser.url('https://webdriver.io/docs/api/browser/saveScreenshot.html');
        //take screenshot
            browser.saveScreenshot('./test/Screenshot/screenshot.png'); 
            browser.close();

    })
})