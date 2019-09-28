describe('API command', function (){
    const FORM = '#login';

    it('Get Element Size', function(){
        browser.url('https://the-internet.herokuapp.com/login');
        
        $(FORM).waitForDisplayed(30000);

        console.log('++++++++++++ Width ' + $(FORM).getSize('width'));
        console.log('++++++++++++ Height ' + $(FORM).getSize('height'));

        //$(FORM).getElementSize(); not work so using getSize
        //console.log('++++++++++++++++++ Form Size is ' + formSize );


    })
})