const datePicker = require('./utilFordateFromFunction')


describe('Testing Demo Date picker From Angular material Site', function(){
    it('Open the link', () => {
        browser.get('https://material.angular.io/components/datepicker/overview',5000);
        browser.sleep(5000);
    });

    // it('It should click on datepicker', () => {
    //     let icons = element.all(by.className('mat-datepicker-toggle-default-icon ng-star-inserted'))
    //     icons.get(0).click();
    //     browser.sleep(5000);
    // });
    // it('should Click on the year header', () => {
    //     element(by.css('.cdk-overlay-container .mat-calendar-header button[aria-label="Choose month and year"]')).click();
    //     browser.sleep(5000);
    // });
    // it('It should select a Year', () => {
    //     let year = 2022;
    //     element(by.css('.cdk-overlay-container .mat-datepicker-content .mat-calendar .mat-calendar-content .mat-calendar-table td[aria-label="'+year+'"]')).click();
    //     browser.sleep(5000);
    // });
  
    // it('it should select a month', () => {
    //     element(by.xpath('//div[contains(text(),"MAR")]')).click();
    //     browser.sleep(500);
        
        
    // });
    // it('It should select a day', () => {
    //     element(by.xpath('//div[contains(text(),"17")]')).click();
    //     browser.sleep(5000);
        
    // });
    it('It should select a date by given input', () => {
        let icons = element.all(by.className('mat-datepicker-toggle-default-icon ng-star-inserted')).get(0);
        browser.sleep(5000);
        let yearBut = element(by.css('.cdk-overlay-container .mat-calendar-header button[aria-label="Choose month and year"]'));
        browser.sleep(5000);
        // getDateFromAnyInput(icons,17/6/2022,yearBut);
        datePicker.getDateFromAnyInput(icons,'7/6/2022',yearBut);
        browser.sleep(10000);
    });
})