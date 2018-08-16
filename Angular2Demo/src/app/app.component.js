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
        this.pageheader = 'Welcome !..';
        this.imagesource = 'http://intellibot.io/img/IB/logo.png';
        this.fullName = 'Tom';
        this.isDisable = false;
        this.lastName = 'Jerry';
        this.applyColorClasses = 'boldClass italicClass';
        this.applyBoldclass = true;
        this.applyItalicclass = true;
        this.inlineIsbold = true;
        this.inlineIsItalic = true;
        this.inlineIsColor = true;
        this.inlineFontSize = 15;
    }
    AppComponent.prototype.getFullName = function () {
        return this.fullName + '' + this.lastName;
    };
    AppComponent.prototype.getButtonstyle = function () {
        var a = {
            boldClass: this.applyBoldclass,
            italicClass: this.applyItalicclass
        };
        return a;
    };
    AppComponent.prototype.getStyle = function () {
        var style = {
            "font-weight": this.inlineIsbold ? 'bold' : 'normal',
            "font-style": this.inlineIsItalic ? 'italic' : 'normal',
            "color": this.inlineIsColor ? 'green' : 'black',
            "font-size.px": this.inlineFontSize
        };
        return style;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n               <div>\n                    <my-employee></my-employee>\n               </div>\n                    "
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map