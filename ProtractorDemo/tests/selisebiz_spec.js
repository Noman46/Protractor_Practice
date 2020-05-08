let loginPage = require('../pages/loginpage');

describe('Selise biz login page', function(){
   
   
   beforeEach(function(){
    browser.get('http://www.helpingtesters.com/practice/protractor/login.php');
   });

   
    it('Verify all the Static text on Login page',function(){
        loginPage.verifyLoginText('Login');
        loginPage.verifyListElements('User Name',0);
        loginPage.verifyListElements('Password',2);
        loginPage.verifyListElements('Forget Password',4);  
        loginPage.verifyButtonText('SIGN IN');
        rowser.sleep('3000');   
    });


    it('Verify login with valid credentials', function(){
        
        loginPage.verifyLogin('Vaibhav','HelpingTesters');
        browser.sleep('3000');
    });

    it('Verify login with invalid credentials', function(){
        
        loginPage.verifyLogin('Vaibha','HelpingTester');
        browser.sleep('3000');
    });


    //------------ Could not do -----------------------------
                // it('Verify login without any credentials', function(){
                    
                // });

                // it('Verify login with username but no password', function(){

                // });

                // it('Verify login with passwor but no username', function(){

                // });

   

});