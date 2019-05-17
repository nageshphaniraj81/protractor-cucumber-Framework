import { Given, Then, When } from "cucumber";
import { calculator } from '../pages/calculatorpage';
import { browser } from "protractor";
import { async } from "q";
import chai from "chai";

let calc = new calculator();
var expect = chai.expect;

//Scenario: Calculator functionality
Given('I will navigate to calc site', async () => {
    await browser.get('http://juliemr.github.io/protractor-demo/').then(() => {        
        browser.sleep(2000);
    });
});

When('when I add {string} and {string}', async (string, string2) => {
    await calc.firstEditBox.sendKeys(string);
    await calc.operatorAdd.click();
    await calc.secondEditBox.sendKeys(string2);
    await calc.go.click();
});

When('when I subtract {string} and {string}', async (string, string2) => {
    await calc.firstEditBox.sendKeys(string);
    await calc.operatorSub.click();
    await calc.secondEditBox.sendKeys(string2);
    await calc.go.click();
});

When('when I divide {string} and {string}', async (string, string2) => {
    await calc.firstEditBox.sendKeys(string);
    await calc.operatorDivide.click();
    await calc.secondEditBox.sendKeys(string2);
    await calc.go.click();
});


Then('result displayed should be {string}', async (string) => {
    await calc.getResult.getText().then((text) => {
        expect(text).to.equal(string);
    })
});


