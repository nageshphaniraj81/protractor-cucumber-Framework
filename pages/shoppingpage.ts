import { ElementFinder,element,by } from "protractor";

export class shoppingpage
{
    nameText:ElementFinder;
    emailText:ElementFinder;
    PasswordText:ElementFinder;
    IceCreamCheckBox:ElementFinder;
    GenderDropDown:ElementFinder;
    EmploymentStatusRadio:ElementFinder;
    DOBText:ElementFinder;
    SubmitButton:ElementFinder;
    SuccessText:ElementFinder;
   
    constructor(){
        this.nameText=  element(by.name("name"));
		this.emailText= element(by.css("input[name='email']"));
		this.PasswordText= element(by.id("exampleInputPassword1"));
		this.IceCreamCheckBox= element(by.css("input[type='checkbox']"));
		this.GenderDropDown= element(by.cssContainingText("[id='exampleFormControlSelect1'] option","Female"));
		this.EmploymentStatusRadio= element.all(by.name("inlineRadioOptions")).first();
		this.DOBText= element(by.name("bday"));
        this.SubmitButton = element(by.buttonText("Submit"));
        this.SuccessText = element(by.css("div[class*='success']"));
    }
}