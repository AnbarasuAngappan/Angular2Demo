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
    }
    AppComponent.prototype.getFullName = function () {
        return this.fullName + '' + this.lastName;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n               <div>\n                    <h1>{{pageheader + getFullName()}}</h1>    \n                    <img src=\"{{imagesource}}\" />\n                    <my-employee></my-employee>\n                    <input disabled = '{{isDisable}}' type=\"button\" value=\"Click Me\"  />\n                    <button disabled = '{{isDisable}}'>Click ME</button>\n                    <button [disabled] = 'isDisable'>Click ME</button>\n               </div>\n                    "
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map