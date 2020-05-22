

describe('Online application', function(){
    
    beforeEach(function () {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
      });
    

    it('Verify a the application process by creating an application', () => {
        browser.ignoreSyncronization = true
        browser.get('https://stg-pwc.selise.biz/#/login',25000);
        browser.sleep(15000);
        element(by.model('vm.userName')).sendKeys('dilshad.tonu@gmail.com');
        element(by.model('vm.password')).sendKeys('1qazZAQ!');
        element(by.css('[type="submit"]')).click();
        browser.sleep(30000);
        element(by.buttonText('Online application')).click();
        browser.sleep(5000);
        element(by.buttonText('Start new')).click();
        browser.sleep(500);
        element(by.buttonText('Yes')).click();
        browser.sleep(4500);

        //let radio = $(by.css('md-radio-button'));
        // expect(radio.getAttribute('value'))
        element(by.buttonText('Next')).click();
        browser.sleep(8500);
        let img = element(by.css('img[src*="FI.png"]'));
        img.click();
        browser.sleep(2000)
        // expect(element(by.css('md-radio-button[value="English and Finnish"]')).isSelected()).toBe(true);
        // expect(element(by.css('md-radio-button[value="Swiss Life Luxembourg"]')).isSelected()).toBe(true);
        // browser.sleep(500);
        element(by.css('[ng-if="vm.isNextEnabled"]')).click();
        browser.sleep(7000);
        element(by.css('button[aria-label="Client assessment report/Asiakasarviointiraportti   * Mandatory"]')).click().then(function(){
            browser.sleep(10000);

            browser.executeScript("document.getElementsByClassName('md-datepicker-input').value='02/11/2019'");
                browser.sleep(20000);
                element(by.css('input[name="postcodeAndTownOrCity"]')).sendKeys('TEST POST NAME');
              browser.sleep(2500);
        //     element(by.css('[ng-click="ctrl.openCalendarPane($event)"]')).click().then(function(){
        //         //element(by.css('[ng-click="ctrl.openCalendarPane($event)"]')).sendKeys(01-01-2001);
        //         element(by.css('input[class="md-datepicker-input md-input"]')).sendKeys('01-01-2001');
        //   //browser.executeScript("document.getElementsByClassName('md-datepicker-input').value='02/11/2019'");
        //         browser.sleep(20000);
        //         element(by.css('input[name="postcodeAndTownOrCity"]')).sendKeys('TEST POST NAME');
        //         browser.sleep(2500);
        //     });
            
       
        })
       
       


        // element(by.css('md-radio-button[name="Mr"]')).click();
        // //element(by.css('input[name="nameOfDeclarant"]')).sendKeys('TEST DECLARENT');
        // element(by.model('vm.formData.NameOfTheDeclarant')).sendKeys('TEST DECLARENT');
        // //element(by.css('input[name="firstName"]')).sendKeys('TEST FIRST NAME');
        // element(by.model('vm.formData.FirstNameOfTheDeclarant')).sendKeys('TEST FIRST NAME');
        // //element(by.css('input[name="streetNameAndNumberOfResidence"]')).sendKeys('TEST STREET NAME');
        // element(by.model('vm.formData.StreetNameAndNumberOfResidenceOfTheDeclarant')).sendKeys('TEST STREET NAME');
        // //element(by.css('input[name="postcodeAndTownOrCity"]')).sendKeys('TEST POST NAME');
        // element(by.model('vm.formData.PostcodeAndTownOrCityOfTheDeclarant')).sendKeys('TEST POST NAME');
        // element(by.css('md-select[ng-name="CountryResidenceOfTheDeclarant"]')).click().then(function(){
        //     browser.sleep(1500);
        //     element(by.css('md-option[value="Finland/Suomi"]')).click();
        // })
        // // element(by.css('md-select[ng-name="NationalityOfTheDeclarant"]')).click().then(function(){
        // //     browser.sleep(1500);
        // //     element(by.css('md-option[value="Finland/Suomi"]')).click();
        // // })
        // element(by.model('vm.formData.NationalityOfTheDeclarant')).click()

        



        
        




      
        
        
    });
});