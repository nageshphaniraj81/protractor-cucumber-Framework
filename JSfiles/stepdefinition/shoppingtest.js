"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const shoppingpage_1 = require("../pages/shoppingpage");
const protractor_1 = require("protractor");
const chai_1 = __importDefault(require("chai"));
let shop = new shoppingpage_1.shoppingpage();
var expect = chai_1.default.expect;
let success;
cucumber_1.Given('I will navigate to Shopping page', () => __awaiter(this, void 0, void 0, function* () {
    yield protractor_1.browser.get('https://qaclickacademy.github.io/protocommerce/').then(() => {
    });
}));
cucumber_1.When('I fill {string},{string},{string} and {string}', (string, string2, string3, string4) => __awaiter(this, void 0, void 0, function* () {
    yield shop.nameText.sendKeys(string);
    yield shop.emailText.sendKeys(string2);
    yield shop.PasswordText.sendKeys(string3);
    yield shop.IceCreamCheckBox.click();
    yield shop.GenderDropDown.click();
    yield shop.EmploymentStatusRadio.click();
    yield shop.DOBText.sendKeys(string4);
}));
cucumber_1.When('I click on Submit button', () => __awaiter(this, void 0, void 0, function* () {
    yield shop.SubmitButton.click().then(function () {
        shop.SuccessText.getText().then(function (text) {
            success = text;
        });
    });
}));
cucumber_1.Then('I see success message', () => __awaiter(this, void 0, void 0, function* () {
    yield console.log(success);
    //expect("").to.equal(success);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvcHBpbmd0ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3RlcGRlZmluaXRpb24vc2hvcHBpbmd0ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBNkM7QUFDN0Msd0RBQXFEO0FBQ3JELDJDQUFxQztBQUVyQyxnREFBd0I7QUFFeEIsSUFBSSxJQUFJLEdBQUcsSUFBSSwyQkFBWSxFQUFFLENBQUM7QUFDOUIsSUFBSSxNQUFNLEdBQUcsY0FBSSxDQUFDLE1BQU0sQ0FBQztBQUN6QixJQUFJLE9BQWMsQ0FBQztBQUVuQixnQkFBSyxDQUFDLGtDQUFrQyxFQUFDLEdBQVMsRUFBRTtJQUNoRCxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLGlEQUFpRCxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtJQUMvRSxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsZ0RBQWdELEVBQUUsQ0FBTyxNQUFNLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUMsRUFBRTtJQUMvRixNQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ25DLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdkMsTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMxQyxNQUFNLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNwQyxNQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDbEMsTUFBTSxJQUFJLENBQUMscUJBQXFCLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDekMsTUFBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUM1QyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLDBCQUEwQixFQUFFLEdBQVEsRUFBRTtJQUN2QyxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDO1FBQzdCLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMsSUFBSTtZQUNoQyxPQUFPLEdBQUMsSUFBSSxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxDQUFBO0lBQ1YsQ0FBQyxDQUFDLENBQUE7QUFFVixDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLHVCQUF1QixFQUFFLEdBQVEsRUFBRTtJQUNwQyxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDM0IsK0JBQStCO0FBQ25DLENBQUMsQ0FBQSxDQUFDLENBQUMifQ==