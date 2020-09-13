var { After } = require('cucumber');
var { AfterAll } = require('cucumber');
let { defineSupportCode } = require('cucumber');
var reporter = require('cucumber-html-reporter');

var options = {
  theme: 'bootstrap',
  jsonFile: './report/test.json',
  output: './report/cucumber_report.html',
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: true,
  metadata: {
    "App Version": "0.3.2",
    "Test Environment": "STAGING",
    "Browser": "Chrome  54.0.2840.98",
    "Platform": "Windows 10",
    "Parallel": "Scenarios",
    "Executed": "Remote"
  }
};
After(async function () {
  return await this.driver.quit();
});
defineSupportCode(({ registerHandler, registerListener }) => {
  registerHandler('AfterFeatures', function (event, callback) {


    reporter.generate(options);
    callback();
  });
});






