"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.userTest = "SAI";
        //<div>
        //               You Entered Text:<input type="text" [(ngModel)] ='userTest'/>
        //                 <br /> <br />
        //               <sample [getInputText]='userTest'></sample>
        //                <my-employeeList></my-employeeList>
        //           </div>
        //pageheader: string = 'Welcome !..';
        //imagesource: string = 'http://intellibot.io/img/IB/logo.png';
        //fullName: string = 'Tom';
        //isDisable: boolean = false;
        //lastName: string = 'Jerry';
        //getFullName(): string{
        //    return this.fullName + '' + this.lastName;
        //}
        //applyColorClasses: string = 'boldClass italicClass';
        //applyBoldclass: boolean = true;
        //applyItalicclass: boolean = true;
        //inlineIsbold: boolean = true;
        //inlineIsItalic: boolean = true;
        //inlineIsColor: boolean = true;
        //inlineFontSize: number = 15;
        //getButtonstyle() {
        //    let a = {
        //        boldClass: this.applyBoldclass,
        //        italicClass: this.applyItalicclass
        //    };
        //    return a;
        //}
        //getStyle() {
        //    let style = {
        //        "font-weight": this.inlineIsbold ? 'bold' : 'normal',
        //        "font-style": this.inlineIsItalic ? 'italic' : 'normal',
        //        "color": this.inlineIsColor ? 'green' : 'black',
        //        "font-size.px": this.inlineFontSize
        //    }
        //    return style;
        //}
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n                <div style=\"padding:5px\">\n                      You Entered Text:<input type=\"text\" [(ngModel)] ='userTest'/>\n                <br /> <br />\n              <sample [getInputText]='userTest'></sample>\n                <my-employeeList></my-employeeList>\n                </div>\n              "
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map