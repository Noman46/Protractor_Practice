describe('Selise biz login page', function(){
   
   
   
   
    it('Verify all the Static text on Login page',function(){
          
        browser.get('http://www.helpingtesters.com/practice/protractor/login.php');
        
        expect(element(by.className('page-title')).getText()).toBe('Login');
        let list = element.all(by.css('.col-sm-12 label'));
        expect(list.get(0).getText()).toBe('User Name');
        expect(list.get(2).getText()).toBe('Password');
        expect(list.get(4).getText()).toBe('Forget Password');
        expect(element(by.id('submit')).getText()).toBe('SIGN IN');
    });
    it('Verify login with valid credentials', function(){
        browser.get('http://www.helpingtesters.com/practice/protractor/login.php');
        element(by.model('name')).sendKeys('Vaibhav');
        element(by.model('password')).sendKeys('HelpingTesters');
        element(by.css('button[type="submit"]')).click();
        var elem = element(by.css('[ng-if="correctMessage"]'));
         
        elem.isPresent().then(function(fnct){
            if(fnct){
             element(by.tagName('p')).getText().then(function(){
                 console.log("The Log in successfull");
             });
             }
            else{
                 console.log("login is unsuccessfull");
             }
            });
        browser.sleep('3000');
    });
});