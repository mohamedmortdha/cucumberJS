var webdriver = require('selenium-webdriver');
const {BeforeAll, AfterAll} = require('cucumber');
var{setWorldConstructor} = require('cucumber');
var{setDefaultTimeout}=require('cucumber');
var{setDefaultTimeout}=require('cucumber');

function CBTWorld() {

  this.driver =  new webdriver.Builder().forBrowser("chrome").build();


}
  setDefaultTimeout(60 * 1000);
  setWorldConstructor(CBTWorld);
