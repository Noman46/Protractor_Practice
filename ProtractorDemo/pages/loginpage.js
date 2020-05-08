
let loginPage = function(){

      
      
    // Verify all the Static text on Login page :: test case --> 1
        
        let loginText = element(by.className('page-title'));
        let list = element.all(by.css('.col-sm-12 label'));
        let buttonText = element(by.id('submit'));

        this.verifyLoginText = function(text){
            expect(loginText.getText()).toBe(text);
        };
        this.verifyListElements = function(text,indexNo){
            expect(list.get(indexNo).getText()).toBe(text);
        };
        this.verifyButtonText = function(){
            expect(buttonText.getText()).toBe('SIGN IN');
        };

    // END of the 1st test case (1)


    // Verify login with valid+invalid credentials :: test case --> 2,3
    
       
        this.verifyLogin = function(username,password){

            let userNameIn = element(by.model('name'));
            let passwordIn = element(by.model('password'));
            let submit = element(by.css('button[type="submit"]'));
            let correctMessage = element(by.css('[ng-if="correctMessage"]'));
            let incorrectMessage = element(by.css('[ng-if="incorrectMessage"]'));
            
            userNameIn.sendKeys(username);
            passwordIn.sendKeys(password);
            submit.click();
          
            correctMessage.isPresent().then(function(bool){
                if(bool){
                 console.log("Correctmessage element Found and Login works work with valid credentials");
                }
               
            });
            incorrectMessage.isPresent().then(function(bool){
                if(bool){
                    console.log("Incorrectmessage element found and login doesn't work with invalid credentials");
                   }
            });
        };

    // END of the 2nd test case (2,3)
    


}
module.exports= new loginPage();