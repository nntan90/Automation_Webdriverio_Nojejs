let path = require('path');

describe('API command', function (){

        const UPLOAD_FIELD = '#file-upload';
        const UPLOAD_BTN   = '#file-submit';

    it('Upload file', function(){
            //Open browser
                browser.url('https://the-internet.herokuapp.com/upload');
            //Wait load
                $(UPLOAD_FIELD).waitForDisplayed(30000);
            //Define a varible to content uploadFile(path)
                let filePath = browser.uploadFile(path.join(__dirname, './alert.js'));

            //set value to field upload
                $(UPLOAD_FIELD).setValue(filePath);

            //Click upload
                $(UPLOAD_BTN).click();

                browser.pause(5000);

    })

})