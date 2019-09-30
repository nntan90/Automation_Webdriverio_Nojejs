let CONTENT_TXT = '[class="icon-lock"]';

class SecureAreaPage {
    
    verifyTextH2(){
        let verifyTitle = browser.getTitle();
        console.log('=====================>', verifyTitle);
    }

}
module.exports = new SecureAreaPage();