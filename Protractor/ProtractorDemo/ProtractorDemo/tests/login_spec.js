

describe("tesing demo project", function () {
   beforeEach(function () {
     originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
     jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
   });
 
   

   it('login page static text test for English', function () {
     browser.ignoreSyncronization = true
     browser.get('https://stg-pwc.selise.biz/#/login');
     browser.sleep(10000);
     element(by.id('select_value_label_0')).click();
     //loginPage.clickOnDropDown();
     //browser.sleep(5000);
     element(by.id('select_option_3')).click();
     //browser.sleep(5000);
      let list = element.all(by.tagName('h1'));
      //browser.sleep(2000);
     expect(list.get(0).getText()).toBe('Login');
     //browser.sleep(1500);
     expect(element(by.css('label[for = "username"]')).getText()).toBe('Email');
     
     expect(element(by.css('label[for = "password"]')).getText()).toBe('Password');
    
     expect(element(by.css('[href *="forgot-password"]')).getText()).toBe('Forgot password?')
     
     expect(element(by.css('button')).getText()).toBe('Login');
     expect(element(by.css('span[class="ng-binding"]')).getText()).toBe('By signing in, you are agreeing to the Terms of service and Privacy policy.')
     expect(element(by.css('[href*="manual.html"]')).getText()).toBe('Support center');
  

   });

 
  it('login page static text test for German', function () {
     browser.ignoreSyncronization = true
     browser.get('https://stg-pwc.selise.biz/#/login');
     browser.sleep(10000);
     element(by.id('select_value_label_0')).click();
     //browser.sleep(5000);
     element(by.id('select_option_4')).click();
     //browser.sleep(5000);
     let list = element.all(by.tagName('h1'));
    // browser.sleep(2000);
    expect(list.get(0).getText()).toBe('Anmeldung');
    //browser.sleep(1500);
    expect(element(by.css('label[for = "username"]')).getText()).toBe('Email');
    
    expect(element(by.css('label[for = "password"]')).getText()).toBe('Passwort');
   
    expect(element(by.css('[href *="forgot-password"]')).getText()).toBe('Passwort vergessen?')
    
    expect(element(by.css('button')).getText()).toBe('Anmelden');
    expect(element(by.css('span[class="ng-binding"]')).getText()).toBe('Mit der Anmeldung stimmen Sie den Nutzungsbedingungen und der Datenschutzerklärung zu.')
    expect(element(by.css('[href*="manual.html"]')).getText()).toBe('Hilfecenter');
   });

   it('login page static text test for French', function () {
    browser.ignoreSyncronization = true
    browser.get('https://stg-pwc.selise.biz/#/login');
    browser.sleep(10000);
    element(by.id('select_value_label_0')).click();
    //browser.sleep(5000);
    element(by.id('select_option_5')).click();
    //browser.sleep(5000);
    let list = element.all(by.tagName('h1'));
   // browser.sleep(2000);
   expect(list.get(0).getText()).toBe('Identifiant');
   //browser.sleep(1500);
   expect(element(by.css('label[for = "username"]')).getText()).toBe('E-mail');
   
   expect(element(by.css('label[for = "password"]')).getText()).toBe('Mot de passe');
  
   expect(element(by.css('[href *="forgot-password"]')).getText()).toBe('Mot de passe oublié?')
   
   expect(element(by.css('button')).getText()).toBe('Connexion');
   expect(element(by.css('span[class="ng-binding"]')).getText()).toBe("En vous inscrivant, vous acceptez les conditions d'utilisation et à la politique de confidentialité.")
   
   
  expect(element(by.css('[href*="manual.html"]')).getText()).toBe('Centre de soutien');
  });

  it('Verify Forgot password Link', function(){
    browser.ignoreSyncronization = true
    browser.get('https://stg-pwc.selise.biz/#/login');
    browser.sleep(10000);
    element(by.css('a[href*="forgot-password"]')).click().then(function(){
     browser.sleep(2000);
     browser.getCurrentUrl().then(function(url){
      console.log(url);
     });
     expect(browser.getCurrentUrl()).toMatch("https://stg-pwc.selise.biz/#/forgot-password");
     
    });
  });

  
  it('Verify the terms and services Link',function(){
    browser.ignoreSyncronization = true;
    browser.get('https://stg-pwc.selise.biz/#/login',20000);
    browser.sleep(10000);
    element(by.css('a[href*="terms-of-service.html"]')).click().then(function(){
      //browser.sleep(2000);
      browser.getAllWindowHandles().then(function (handles) {
        newWindowHandle = handles[1]; // this is your new window
        browser.switchTo().window(newWindowHandle).then(function () {
            // fill in the form here
            browser.waitForAngularEnabled(false);
            browser.getCurrentUrl().then(function(url){
              console.log(url);
            });
            
          expect(browser.getCurrentUrl()).toMatch("https://www.swisslife-global.com/global-private-wealth/resources/e-private-wealth.html");
            browser.sleep(2000);
            
            
          });
   
        
      });
  });
}); 

it('Verify the Privacy Policy Link',function(){
  browser.ignoreSyncronization = true;
  browser.get('https://stg-pwc.selise.biz/#/login',20000);
  browser.sleep(10000);
  element(by.css('a[href*="privacy-policy.html"]')).click().then(function(){
    //browser.sleep(2000);
    browser.getAllWindowHandles().then(function (handles) {
      newWindowHandle = handles[2]; // this is your new window
      browser.switchTo().window(newWindowHandle).then(function () {
          // fill in the form here
          browser.waitForAngularEnabled(false);
          browser.getCurrentUrl().then(function(url){
            console.log(url);
          });
          
        expect(browser.getCurrentUrl()).toMatch("https://www.swisslife-global.com/global-private-wealth/resources/e-private-wealth.html");
          browser.sleep(2000);
        });
 
      
    });
});
});

it('Verify the support center Link',function(){
  browser.ignoreSyncronization = true;
  browser.get('https://stg-pwc.selise.biz/#/login',20000);
  browser.sleep(10000);
  element(by.css('a[href*="manual.html"]')).click().then(function(){
    //browser.sleep(2000);
    browser.getAllWindowHandles().then(function (handles) {
      newWindowHandle = handles[3]; // this is your new window
      browser.switchTo().window(newWindowHandle).then(function () {
          // fill in the form here
          browser.waitForAngularEnabled(false);
          browser.getCurrentUrl().then(function(url){
            console.log(url);
          });
          
        expect(browser.getCurrentUrl()).toMatch("https://www.swisslife-global.com/global-private-wealth/resources/e-private-wealth.html");
          browser.sleep(2000);
        });
 
      
    });
});
});




 });
