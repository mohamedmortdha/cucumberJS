var webdriver = require('selenium-webdriver');
var { Given, When, Then } = require('cucumber');
var assert = require('assert');
var { defineSupportCode } = require('cucumber');
const { elementIsDisabled } = require('selenium-webdriver/lib/until');
// require("babel-core/register");
// require("babel-polyfill");
// Given('I go to my ToDo APP', async function () {
//   return await this.driver.get('http://localhost:9090/');
// });

// When('I add a new ToDo', async  function () {
//   await this.driver.findElement(webdriver.By.id("todotext")).sendKeys("Run your first Selenium Test");
//   return await this.driver.findElement(webdriver.By.id("addbutton")).click();
// });

// Then('I should have 6 ToDos', async function() {
//   return await  this.driver.findElements(webdriver.By.className('ng-pristine ng-untouched ng-valid'))
//     .then(function(elems) {
//       assert.equal(elems.length, 6);
//   });

Given('Page Should Contain Element input text description', async function () {
  return await this.driver.get('http://localhost:9090/');
});

When('Submit a todo {stringInDoubleQuotes}', async function (stringInDoubleQuotes) {
  await this.driver.sleep(200);
  await this.driver.findElement(webdriver.By.xpath("/html/body/form/input")).sendKeys(stringInDoubleQuotes);
  await this.driver.sleep(200);
  return await this.driver.findElement(webdriver.By.xpath("/html/body/form/button")).click();
});
Then('Element Should contain {stringInDoubleQuotes}', async function (stringInDoubleQuotes) {
  await this.driver.sleep(200);
  let elm = await this.driver.findElements(webdriver.By.xpath("/html/body/ul/li/span"));
  var text = "";
  for (let e of elm) {
    return assert.equal(await e.getText(), stringInDoubleQuotes);
  }
});

Then('CheckBox Should Not be Selected', async function () {
  let elm = await this.driver.findElement(webdriver.By.xpath("/html/body/ul/li[1]/input"));
  await this.driver.sleep(200);
  return assert.equal(await elm.isSelected(), false);
});

Then('First Elment Should Contain {stringInDoubleQuotes}', async function (stringInDoubleQuotes) {
  await this.driver.sleep(200);
  let elm = await this.driver.findElements(webdriver.By.xpath("/html/body/ul/li[1]/span"));
  for (let e of elm) {
    return assert.equal(await e.getText(), stringInDoubleQuotes);
  }
});


Then('Second Element Should Contain {stringInDoubleQuotes}', async function (stringInDoubleQuotes) {
  await this.driver.sleep(200);
  let elm = await this.driver.findElements(webdriver.By.xpath("/html/body/ul/li[2]/span"));
  var text = "";
  for (let e of elm) {
    return assert.equal(await e.getText(), stringInDoubleQuotes);
  }
});


Then('Third Element Should Contain {stringInDoubleQuotes}', async function (stringInDoubleQuotes) {
  await this.driver.sleep(200);
  let elm = await this.driver.findElements(webdriver.By.xpath("/html/body/ul/li[3]/span"));
  var text = "";
  for (let e of elm) {
    return assert.equal(await e.getText(), stringInDoubleQuotes);
  }
});


When('Select first Checkbox todo', async function () {
  let elm = await this.driver.findElement(webdriver.By.xpath("/html/body/ul/li[1]/input")).click();
  await this.driver.sleep(200);
});

Then('First CheckBox Should be Selected', async function () {
  let elm = await this.driver.findElement(webdriver.By.xpath("/html/body/ul/li[1]/input"));
  await this.driver.sleep(200);
  return assert.equal(await elm.isSelected(), true);
});

Then('Second Checkbox Should Not Be Selected', async function () {
  let elm = await this.driver.findElement(webdriver.By.xpath("/html/body/ul/li[2]/input"));
  await this.driver.sleep(200);
  return assert.equal(await elm.isSelected(), false);
});


Then('Third CheckBox Should Not Be Selected', async function () {
  let elm = await this.driver.findElement(webdriver.By.xpath("/html/body/ul/li[3]/input"));
  await this.driver.sleep(200);
  return assert.equal(await elm.isSelected(), false);
});

Then('Page Should Contain button remove todo', async function () {
  let elm = await this.driver.findElement(webdriver.By.xpath("//html/body/ul/li/button"));
  await this.driver.sleep(200);
  return assert.equal(await elm.isDisplayed(), true);
});

When('Click buton reomve todo', async function () {
  return await this.driver.findElement(webdriver.By.xpath("//html/body/ul/li/button")).click();

});


Then('Page Shoould Not Contain Element {stringInDoubleQuotes}', async function (stringInDoubleQuotes,) {
  await this.driver.sleep(500);
  let result = true;
  try {
    elm = await this.driver.findElement(webdriver.By.xpath("//html/body/ul/li/button"))
  } catch (error) {
    console.log("I am here")
    result = false;
  }
  return assert.equal(result, false);
});

Then('Page Should Not Contain Element category {stringInDoubleQuotes} and {stringInDoubleQuotes}', async function (stringInDoubleQuotes, stringInDoubleQuotes2) {
  await this.driver.sleep(200);
  let elm = await this.driver.findElements(webdriver.By.xpath("/html/body/ul/li[1]/span"));
  await assert.notEqual(await elm[0].getText(), stringInDoubleQuotes);
  return assert.notEqual(await elm[0].getText(), stringInDoubleQuotes2);
});

When('Select category {stringInDoubleQuotes}', async function (stringInDoubleQuotes) {
  let elm = await this.driver.findElements(webdriver.By.tagName("option"));
  for (let e of elm) {
    e.getText().then(function (txt) {
      if (txt.trim().lastIndexOf(stringInDoubleQuotes) >= 0) {
        return e.click();
      }
    })
  }
});

Then('First Element Text Shoould Be category {stringInDoubleQuotes}', async function (stringInDoubleQuotes) {
  await this.driver.sleep(200);
  let elm = await this.driver.findElements(webdriver.By.xpath("/html/body/ul/li[2]/span[1]"));
  var text = "";
  for (let e of elm) {
    return assert.equal(await e.getText(), stringInDoubleQuotes);
  }
});

Then('Secound Element Text Should Be category {stringInDoubleQuotes}', async function (stringInDoubleQuotes) {
  await this.driver.sleep(200);
  let elm = await this.driver.findElements(webdriver.By.xpath("/html/body/ul/li[3]/span[1]"));
   var text = "";
   for (let e of elm) {
     return assert.equal(await e.getText(), stringInDoubleQuotes);
   }
});

Then('Third Element Text Should Be category {stringInDoubleQuotes}', async function (stringInDoubleQuotes) {
  await this.driver.sleep(200);
  let elm = await this.driver.findElements(webdriver.By.xpath("/html/body/ul/li[4]/span[1]"));
   var text = "";
   for (let e of elm) {
     return assert.equal(await e.getText(), stringInDoubleQuotes);
   }
});