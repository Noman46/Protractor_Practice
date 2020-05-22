const getCurrentDate = require('./util')

describe('Testing Demo Date picker From Angular material Site', function(){
    it('Open the link', () => {
        browser.get('https://material.angular.io/components/datepicker/overview',5000);
        browser.sleep(5000);
    });

    it('It should click on datepicker', () => {
        let icons = element.all(by.className('mat-datepicker-toggle-default-icon ng-star-inserted'))
        console.log(getCurrentDate);
        icons.get(0).click();
        browser.sleep(5000);
    });

    it('It should select a date', () => {
        // Any day in the current month
        //element(by.css('.cdk-overlay-container mat-month-view [aria-label="May 6, 2020"]')).click();
       
        //Current day in the current month
        element(by.css('.cdk-overlay-container mat-month-view [aria-label="'+getCurrentDate+'"]')).click();
        
      
        browser.sleep(5000);
    });
});