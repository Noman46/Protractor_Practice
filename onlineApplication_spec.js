

describe('Online application', function(){
    
    beforeEach(function () {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
      });
    

    it('Verify a the application process by creating an application', () => {
        browser.ignoreSyncronization = true
        browser.get('https://stg-pwc.selise.biz/#/login',55000);
        browser.sleep(50000);
        element(by.model('vm.userName')).sendKeys('dilshad.tonu@gmail.com');
        element(by.model('vm.password')).sendKeys('1qazZAQ!');
        element(by.css('[type="submit"]')).click();
        browser.sleep(55000);
        element(by.buttonText('Online application')).click();
        browser.sleep(25000);
        element(by.buttonText('Start new')).click();
        browser.sleep(3500);
        element(by.buttonText('Yes')).click();
        browser.sleep(4500);

        let radio = $(by.css('md-radio-button'));
        expect(radio.getAttribute('value')).toBe('YES');
        element(by.buttonText('Next')).click();
        browser.sleep(3500);
        let img = element(by.css('img[src*="FI.png"]'));
        img.click();
        browser.sleep(2000)
        expect(element(by.css('md-radio-button[value="English and Finnish"]')).isSelected()).toBe(true);
        browser.sleep(2000)
        expect(element(by.css('md-radio-button[value="Swiss Life Luxembourg"]')).isSelected()).toBe(true);
        browser.sleep(2000)
        element(by.css('[ng-if="vm.isNextEnabled"]')).click();
        browser.sleep(3000);
        let bList = element.all(by.css('[ng-if="vm.workflows.length>0"]'))
        bList.get(0).click();
        browser.sleep(10000);

        element(by.css('md-radio-button[value="MR"]')).click();


        element(by.css('input[name="nameOfDeclarant"]')).click().sendKeys('TEST DECLARENT');
        element(by.css('input[name="firstName"]')).click().sendKeys('TEST FIRST NAME');
        element(by.css('input[name="streetNameAndNumberOfResidence"]')).click().sendKeys('TEST STREET NAME');
        element(by.css('input[name="postcodeAndTownOrCity"]')).click().sendKeys('TEST POST NAME');
        element(by.css('md-select[ng-name="CountryResidenceOfTheDeclarant"]')).click().then(function(){
            element(by.css('md-option[value="Finland/Suomi"]')).click();
        })
        element(by.css('md-select[ng-name="NationalityOfTheDeclarant"]')).click().then(function(){
            element(by.css('md-option[value="Finland/Suomi"]')).click();
        })



        
        




      
        
        
    });
});