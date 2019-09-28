describe('API command', function(){

    it('get URL and Title', function(){

        browser.url('https://webdriver.io');

        let getUrl = browser.getUrl();

        let getTitle = browser.getTitle();

        console.log('++++++++++++++ URL is ' + getUrl);
        console.log('++++++++++++++ Title is ' + getTitle);


    })    
})