import { Given, Then, When } from "cucumber";
import { shoppingpage } from '../pages/shoppingpage';
import { browser } from "protractor";
import { async } from "q";
import chai from "chai";

let shop = new shoppingpage();
var expect = chai.expect;
let success:string;

Given('I will navigate to Shopping page',async () =>{
    await browser.get('https://qaclickacademy.github.io/protocommerce/').then(() => {      
    });
});

When('I fill {string},{string},{string} and {string}', async (string, string2, string3, string4)=> {
	  await  shop.nameText.sendKeys(string);
      await	shop.emailText.sendKeys(string2);
      await shop.PasswordText.sendKeys(string3);
      await shop.IceCreamCheckBox.click();
      await shop.GenderDropDown.click();
      await	shop.EmploymentStatusRadio.click();
      await  shop.DOBText.sendKeys(string4);      
});

When('I click on Submit button', async ()=> {
    await shop.SubmitButton.click().then(function() {
            shop.SuccessText.getText().then(function(text) {
                         success=text;
                })
        })
        
});

Then('I see success message', async ()=> {
    await console.log(success);
    //expect("").to.equal(success);
});