describe('Testing Demo Date picker From Angular material Site', function(){
    it('Open the link', () => {
        browser.get('https://material.angular.io/components/datepicker/overview',5000);
        browser.sleep(5000);
    });

    it('It should click on datepicker', () => {
        let icons = element.all(by.className('mat-datepicker-toggle-default-icon ng-star-inserted'))
        icons.get(0).click();
        browser.sleep(5000);
    });
    it('It should click on Next month', () => {
        element(by.css('.cdk-overlay-container .mat-calendar-header .mat-calendar-next-button')).click();
        browser.sleep(3000);
    });

    it('It should select a date from next month', () => {
        //Any day in the next month
        // Or we can use it for anyday in previous month
        element(by.css('.cdk-overlay-container mat-month-view [aria-label="June 6, 2020"]')).click();
        browser.sleep(5000);
    });
})