describe("tesing demo project", function () {
    beforeEach(function () {
      originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
      jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
    });
  
    afterEach(function () {
      jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });
  
    it('login test', function () {
      browser.ignoreSyncronization = true
      browser.get('https://stg-pwc.selise.biz/#/login');
      browser.sleep(10000);
      element(by.model('vm.userName')).sendKeys('dilshad.tonu@gmail.com');
      element(by.model('vm.password')).sendKeys('1qazZAQ!');
      element(by.css('[type="submit"]')).click();
  
      browser.sleep(15000);
      browser.wait(waitForUrlChange("https://stg-pwc.selise.biz/index.html#/"), 8000, function () {
        browser.getCurrentUrl().then(function (currentUrl) {
          expect(currentUrl.toEqual("https://stg-pwc.selise.biz/index.html#/"));
        });
      });
    });
  });
  
  function waitForUrlChange(url) {
    return function () {
      return browser.getCurrentUrl().then(function (currentUrl) {
        console.log(currentUrl);
        return url === currentUrl;
      });
    }
  }