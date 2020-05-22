// An example configuration file.

exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome',
    // browserName: 'firefox',
    //  marionette: true,
    //  acceptSslCerts: true
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',
  // allScriptsTimeout: 200000,
  

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  //specs: ['../tests/demo_spec.js'],
  //specs: ['../tests/sel_spec.js'],
  //specs: ['../tests/login_spec.js'],
  //specs: ['../swisslife/dashboard_spec.js'],
  //specs: ['../swisslife/onlineApplication_spec.js'],
 //specs: ['../DatePicker/datepicker_spec.js'],
  //specs: ['../DatePicker/nextmontDate_spec.js'],
   //specs: ['../DatePicker/anydate_spec.js'],
  specs: ['../DatePicker/dateFromfunction_spec.js'],
  

 
  allScriptsTimeout: 300000,
  


  // Options to be passed to Jasmine
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000,
  },

  onPrepare: function() {
    browser.manage().window().maximize();
},
};
