describe('API command for get Attribute', function (){
    const FORM_USERNAME = '#username'
    it('get attribute method of form', function (){
        browser.url('https://the-internet.herokuapp.com/login');

        $(FORM_USERNAME).waitForDisplayed(30000);

        let getAttribute = $(FORM_USERNAME).getAttribute('type');
        
        console.log ('++++++++ Atrribute is ' + getAttribute);

    })
})