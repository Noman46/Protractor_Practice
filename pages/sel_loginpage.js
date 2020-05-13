let loginPage = function() {

    let selectLanguageDropDown = element(by.id('select_value_label_0'));
    let selectEnglish = element(by.id('select_option_3')).click();
    let listOf_H1 = element.all(by.tagName('h1'));
    let selectUserName = element(by.css('label[for = "username"]'));
    let selectPassword = element(by.css('label[for = "password"]'));
    let forgetPassword = element(by.css('[href *="forgot-password"]'));
    let selectButtonText = element(by.css('button'));
    let selectdisclaimer = element(by.css('span[class="ng-binding"]'));
    let selectSupportCenter = element(by.css('[href*="manual.html"]'));
    
    this.clickOnDropDown = function() {
              return selectLanguageDropDown.click();
    }



}
module.exports= new loginPage();