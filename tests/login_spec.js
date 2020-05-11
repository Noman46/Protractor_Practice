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
     browser.sleep(5000);
     element(by.id('select_option_3')).click();
     browser.sleep(5000);
      let list = element.all(by.tagName('h1'));
      browser.sleep(2000);
     expect(list.get(0).getText()).toBe('Login');
     browser.sleep(1500);
     expect(element(by.css('label[for = "username"]')).getText()).toBe('Email');
     
     expect(element(by.css('label[for = "password"]')).getText()).toBe('Password');
    
     expect(element(by.css('[href *="forgot-password"]')).getText()).toBe('Forgot password?')
     
     expect(element(by.css('button')).getText()).toBe('Login');
     expect(element(by.css('span[class="ng-binding"]')).getText()).toBe('By signing in, you are agreeing to the Terms of service and Privacy policy.')
     expect(element(by.css('[href*="manual.html"]')).getText()).toBe('Support center');
  

   });

 
  it('login page static text test for 4', function () {
     browser.ignoreSyncronization = true
     browser.get('https://stg-pwc.selise.biz/#/login');
     browser.sleep(10000);
     element(by.id('select_value_label_0')).click();
     browser.sleep(5000);
     element(by.id('select_option_4')).click();
     browser.sleep(5000);
     let list = element.all(by.tagName('h1'));
     browser.sleep(2000);
    expect(list.get(0).getText()).toBe('Anmeldung');
    browser.sleep(1500);
    expect(element(by.css('label[for = "username"]')).getText()).toBe('Email');
    
    expect(element(by.css('label[for = "password"]')).getText()).toBe('Passwort');
   
    expect(element(by.css('[href *="forgot-password"]')).getText()).toBe('Passwort vergessen?')
    
    expect(element(by.css('button')).getText()).toBe('Anmelden');
    expect(element(by.css('span[class="ng-binding"]')).getText()).toBe('Mit der Anmeldung stimmen Sie den Nutzungsbedingungen und der Datenschutzerklärung zu.')
    expect(element(by.css('[href*="manual.html"]')).getText()).toBe('Hilfecenter');
   });

 });
