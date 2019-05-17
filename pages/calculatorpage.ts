import { ElementFinder, element, by } from "protractor";

export class calculator {
    firstEditBox: ElementFinder;
    secondEditBox: ElementFinder;
    go: ElementFinder;
    getResult: ElementFinder;
    operatorAdd: ElementFinder;
    operatorSub: ElementFinder;
    operatorDivide: ElementFinder;
    operatorMod: ElementFinder;
    operatorMultiply: ElementFinder;

    constructor() {
        this.firstEditBox = element(by.model("first"));
        this.secondEditBox = element(by.model("second"));
        this.go = element(by.id("gobutton"));
        this.getResult = element(by.repeater("result in memory")).element(by.css("td:nth-child(3)"))
        this.operatorAdd = element(by.model("operator")).$('[value ="ADDITION"]');
        this.operatorSub = element(by.model("operator")).$('[value ="SUBTRACTION"]');
        this.operatorDivide = element(by.model("operator")).$('[value ="DIVISION"]');
        this.operatorMod = element(by.model("operator")).$('[value ="MODULO"]');
        this.operatorMultiply = element(by.model("operator")).$('[value ="MULTIPLICATION"]');
    }
}

