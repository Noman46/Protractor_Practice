
let loginPage = function(){

      
      
    // Verify all the Static text on Login page :: test case --> 1
        
        let loginText = element(by.className('page-title'));
        let list = element.all(by.css('.col-sm-12 label'));
        let buttonText = element(by.id('submit'));

        this.verifyLoginText = function(text) {
            expect(loginText.getText()).toBe(text);
        };
        this.verifyListElements = function(text,indexNo) {
            expect(list.get(indexNo).getText()).toBe(text);
        };
        this.verifyButtonText = function() {
            expect(buttonText.getText()).toBe('SIGN IN');
        };

    // END of the 1st test case (1)


    // Verify login with valid+invalid credentials :: test case --> 2,3
        let userNameIn = element(by.model('name'));
        let passwordIn = element(by.model('password'));
        let submit = element(by.css('button[type="submit"]'));
        let correctMessage = element(by.css('[ng-if="correctMessage"]'));
        let incorrectMessage = element(by.css('[ng-if="incorrectMessage"]'));
       
        this.verifyLogin = function(username,password){
            userNameIn.sendKeys(username);
            passwordIn.sendKeys(password);
            submit.click();
          
            correctMessage.isPresent().then(function(bool) {
                if(bool){
                 console.log("Correctmessage element Found and Login works with valid credentials(p)");
                }
               
            });
            incorrectMessage.isPresent().then(function(bool) {
                if(bool){
                    console.log("Incorrectmessage element found and login doesn't work with invalid credentials(p)");
                }
            });
        };

    // END of the 2nd test case (2,3)



    // Verify login without any credentials :: test case (4)
        let warningForUserName = element(by.css('[ng-show*="loginForm.name.$dirty"]'));
        let warningForPassword = element(by.css('[ng-show*="loginForm.password.$dirty"]'));
         
    this.verifyLoginWithoutCredentials = function() {

        userNameIn.sendKeys('any User name').clear().then(function(){
            passwordIn.sendKeys('any password').clear();
            expect(submit.isEnabled()).toBe(false);
            expect(warningForUserName.getText()).toBe('User Name is required');
            expect(warningForPassword.getText()).toBe('Password is required'); 
        });
    }
    // END of the 2nd test case (4)

    // Verify login with username but no password :: test case (5)
    this.verifyLoginOnlyUsername = function(){
        userNameIn.sendKeys('any User name').clear().then(function() {
            expect(submit.isEnabled()).toBe(false);
            expect(warningForUserName.getText()).toBe('User Name is required');
            expect(warningForPassword.getText()).toBe(''); 
         });

    }
    // END of the 2nd test case (5)

    // Verify login with password but no username :: test case (6)
    this.verifyLoginOnlyPassword = function(){
        passwordIn.sendKeys('any password').clear().then(function() {
            expect(submit.isEnabled()).toBe(false);
            expect(warningForUserName.getText()).toBe('');
            expect(warningForPassword.getText()).toBe('Password is required'); 
            });

    }
    // END of the 2nd test case (6)



    


}
module.exports= new loginPage();