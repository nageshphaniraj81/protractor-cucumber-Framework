"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class shoppingpage {
    constructor() {
        this.nameText = protractor_1.element(protractor_1.by.name("name"));
        this.emailText = protractor_1.element(protractor_1.by.css("input[name='email']"));
        this.PasswordText = protractor_1.element(protractor_1.by.id("exampleInputPassword1"));
        this.IceCreamCheckBox = protractor_1.element(protractor_1.by.css("input[type='checkbox']"));
        this.GenderDropDown = protractor_1.element(protractor_1.by.cssContainingText("[id='exampleFormControlSelect1'] option", "Female"));
        this.EmploymentStatusRadio = protractor_1.element.all(protractor_1.by.name("inlineRadioOptions")).first();
        this.DOBText = protractor_1.element(protractor_1.by.name("bday"));
        this.SubmitButton = protractor_1.element(protractor_1.by.buttonText("Submit"));
        this.SuccessText = protractor_1.element(protractor_1.by.css("div[class*='success']"));
    }
}
exports.shoppingpage = shoppingpage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvcHBpbmdwYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZXMvc2hvcHBpbmdwYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQXNEO0FBRXRELE1BQWEsWUFBWTtJQVlyQjtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLFNBQVMsR0FBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxZQUFZLEdBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsY0FBYyxHQUFFLG9CQUFPLENBQUMsZUFBRSxDQUFDLGlCQUFpQixDQUFDLHlDQUF5QyxFQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDdkcsSUFBSSxDQUFDLHFCQUFxQixHQUFFLG9CQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQy9FLElBQUksQ0FBQyxPQUFPLEdBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLFlBQVksR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsV0FBVyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUM7SUFDaEUsQ0FBQztDQUNKO0FBdkJELG9DQXVCQyJ9