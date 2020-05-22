// getDateFromAnyInput= function (dateElement, dateValue, yearButton) {
//     var splitDate = dateValue.split('/');
//     var year = splitDate[2];
//     var month = splitDate[1];
//     var day = splitDate[0];
//     var monthName = getMonthName(month);

//     dateElement.click()
//         .then(() => yearButton.click())
//         .then(() => element(by.xpath("//span[text()='" + year + "']")).click())
//         .then(() => element(by.xpath("//span[text()='" + monthName + "']")).click())
//         .then(() => element(by.xpath("//span[text()='" + day + "']")).click());

// }


let datePicker = function(){
    this.getDateFromAnyInput = function (dateElement, dateValue, yearButton) {
        var splitDate = dateValue.split("/");
        var year = splitDate[2];
        var month = splitDate[1];
        var day = splitDate[0];
        //var monthYear = 
        const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
  "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
        var monthName = monthNames[month];
    
        dateElement.click()
            .then(() => yearButton.click())
            .then(() => element(by.css('.cdk-overlay-container .mat-datepicker-content .mat-calendar .mat-calendar-content .mat-calendar-table td[aria-label="'+year+'"]')).click())
            .then(() => element(by.css('.cdk-overlay-container .mat-datepicker-content .mat-calendar .mat-calendar-content .mat-calendar-table td[aria-label="August 2022"]')).click())
            .then(() => element(by.css('.cdk-overlay-container .mat-datepicker-content .mat-calendar .mat-calendar-content .mat-calendar-table td[aria-label="August 17, 2022"]')).click())
    
    }
}
module.exports = new datePicker();