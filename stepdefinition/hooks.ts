import {After,Before, Status} from "cucumber";
import { browser } from "protractor";

Before({tags: "@CalculatorTesting"}, function () {
    browser.manage().window().maximize();
    browser.manage().deleteAllCookies();
});

Before({tags: "@AngularTesting"}, function () {
    browser.manage().window().maximize();
    browser.manage().deleteAllCookies();
});

Before({tags: "@CalculatorTesting or @AngularTesting"}, function () {
  console.log("I will be executed before every test")
});

Before({tags: "@ShoppingTesting"}, function () {
  browser.manage().window().maximize();
  browser.manage().deleteAllCookies();
});

// You can use the following shorthand when only specifying tags
After(async function(scenario) {
    console.log("Test is completed");
    if (scenario.result.status=== Status.FAILED)
    {
      //code to take screenshot
     const screenshot= await browser.takeScreenshot();   
     this.attach(screenshot,"image/png");
    }
  
  
  });