import { Given, Then, When } from "cucumber";
import { angularpage } from '../pages/angularpage';
import { browser } from "protractor";
import { async } from "q";
import chai from "chai";

let ang = new angularpage();
var expect = chai.expect;

Given('I will navigate to Angular page', async () => {
    await browser.get('https://angularjs.org/').then(() => {
        browser.sleep(2000);
    });
});



When('I clicked on header link', async () => {
    await ang.firstLink.click();
});



Then('you will enter {string} in search box', async (string) => {
    await ang.editBox.sendKeys(string).then(() => {
        browser.sleep(2000);
    });
});
