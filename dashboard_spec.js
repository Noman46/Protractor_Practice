describe('Testcases fro Dashboard page', function(){
    beforeEach(function () {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
      });
    
    
    // it('Verify dashboard has all the menus', () => {
    //     browser.ignoreSyncronization = true
    //     browser.get('https://stg-pwc.selise.biz/#/login',20000);
    //     browser.sleep(10000);
    //     element(by.model('vm.userName')).sendKeys('dilshad.tonu@gmail.com');
    //     element(by.model('vm.password')).sendKeys('1qazZAQ!');
    //     element(by.css('[type="submit"]')).click();
    //     browser.sleep(35000);
    //     element(by.buttonText('Dashboard')).click();
    //     browser.sleep(2000);
    //     element(by.buttonText('Private Wealth Solutions')).click();
    //     browser.sleep(2000);
    //     element(by.buttonText('Online application')).click();
    //     browser.sleep(2000);
    //     element(by.buttonText('Knowledge hub')).click();
    //     browser.sleep(2000);
    //     element(by.buttonText('Invoicing')).click();
    //     browser.sleep(2000);
    //     element(by.buttonText('Swiss Life only')).click();
    //     browser.sleep(2000);
    //     element(by.buttonText('Swiss Life CRM')).click();
    //     browser.sleep(2000);
    //     //element(by.buttonText('Policy Information'));   
    // });
    // it('Verify the profile changes', () => {
    //     browser.ignoreSyncronization = true
    //     browser.get('https://stg-pwc.selise.biz/#/login',20000);
    //     browser.sleep(10000);
    //     element(by.model('vm.userName')).sendKeys('dilshad.tonu@gmail.com');
    //     element(by.model('vm.password')).sendKeys('1qazZAQ!');
    //     element(by.css('[type="submit"]')).click();
    //     browser.sleep(35000);
    //     // Now I need to click on the button at the top left corner
    //     // A menu will be displayed
    //     // Then select the profile from the menu
    //     // Wait for the profile page to load at least 10 sec
    //     // find the first name and change it to Dishad test
    //     // Click on update button
    //     // The button name changes to Dilshad Ferdousi to Dilshad1 Ferdousi
    //     // Then I have to logout and login again as without that the profile name does not get changed
    //     // To check it get the button by button text and verify the button isPResent()

    //     element(by.buttonText('Dilshad Ferdousi')).click();
    //     browser.sleep(1500);
    //     element(by.css('a[href*="profile"]')).click();
    //     browser.sleep(3000);
    //     let list = element.all(by.css('md-icon[class*="icon-mode-edit"]'));
    //     browser.sleep(1500);
    //     list.get(1).click();
    //     browser.sleep(2000);
    //     element(by.css('input[name="FirstName"]')).clear().then(function(){
    //         element(by.css('input[name="FirstName"]')).sendKeys('Dilshad_1');
    //     })
    //     element(by.buttonText('Update')).click().then(function(){
    //         expect(element(by.buttonText('Dilshad_1 Ferdousi')).isPresent()).toBe(true);
    //     });
        
    // });
    it('Add a new video from e-Learning', () => {
        // Go to Knowledge hub
        // Select e-Learning button by text
        // Wait and click on  Add video  button. 
        // wait and fill the form with valid URL from youtube
        // Cleick Next buuton.
        // Click Add video

        browser.ignoreSyncronization = true
        browser.get('https://stg-pwc.selise.biz/#/login',20000);
        browser.sleep(10000);
        element(by.model('vm.userName')).sendKeys('dilshad.tonu@gmail.com');
        element(by.model('vm.password')).sendKeys('1qazZAQ!');
        element(by.css('[type="submit"]')).click();
        browser.sleep(35000);
        element(by.buttonText('Knowledge hub')).click();
        browser.sleep(500);
        element(by.buttonText('e-Learning')).click();
        browser.sleep(5000);
        element(by.buttonText('Add video')).click();
        browser.sleep(5000);
        element(by.css('input[name="videoUrl"]')).click().clear().then(function(){
            element(by.css('input[name="videoUrl"]')).sendKeys('https://www.youtube.com/watch?v=COcc7SZsRyQ');
        });

        let videoTitle = element(by.model('vm.videoInfo.Title'));
        videoTitle.click().clear().then(function(){
            videoTitle.sendKeys('Test Learning Video');
        });
        browser.sleep(2000);
        let videoAuthor = element(by.css('input[aria-label="Enter an author name..."]'));
        videoAuthor.click().clear().then(function(){
            videoAuthor.sendKeys('Test Author');
        });
        let videoCategory = element(by.css('input[aria-label="Enter a category name..."]'));
        videoCategory.click().clear().then(function(){
            videoCategory.sendKeys('testTag');
        });

        let videoTag = element(by.css('input[aria-label="Enter tag name..."]'));
        videoTag.click().clear().then(function(){
            videoTag.sendKeys('testTag');
        });
// let videoDesc = element(by.css('[class*="cke_wysiwyg_frame cke_reset"]'));
// videoDesc.click().clear().then(function(){
//     element(by.classNme('cke_editable cke_editable_themed cke_contents_ltr cke_show_borders')).click().then(function(){
//         broswer.sleep(5000)
//         element(by.classNme('cke_editable cke_editable_themed cke_contents_ltr cke_show_borders')).sendKeys('Test decription');
//     })
    
// })    
        element(by.css('button[aria-label="Next"]')).click().then(function(){
            element(by.buttonText('Add video')).click()
        })
        browser.sleep(2000);
        




        
    });
});
