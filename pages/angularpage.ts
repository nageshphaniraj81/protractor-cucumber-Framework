import { ElementFinder,element,by } from "protractor";

export class angularpage
{
    firstLink:ElementFinder;
    editBox:ElementFinder;
   
    constructor(){
     this.firstLink=element(by.linkText("angular.io"));
     this.editBox=element(by.css('input[type="search"]'));
    }
}