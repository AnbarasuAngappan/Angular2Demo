"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var EmployeeService = /** @class */ (function () {
    function EmployeeService() {
    }
    EmployeeService.prototype.getEmployee = function () {
        return [
            { empID: 'ibot01', names: 'Anbu', gender: 'Male', annualsalary: '300000', dateofbirth: '05/27/1993', locations: 'Chennai' },
            { empID: 'IBOT02', names: 'Balaji', gender: 'Male', annualsalary: '450000', dateofbirth: '02/27/1995', locations: 'Coimbatore' },
            { empID: 'iBOT03', names: 'Gowtham', gender: 'Male', annualsalary: '550000', dateofbirth: '08/27/1992', locations: 'Coimbatore' },
            { empID: 'IBOT04', names: 'Ramesh', gender: 'Male', annualsalary: '480000', dateofbirth: '09/7/1945', locations: 'Coimbatore' },
            { empID: 'iBOT05', names: 'Angappan', gender: 'Male', annualsalary: '550000', dateofbirth: '06/24/1942', locations: 'Coimbatore' },
            { empID: 'iBOT06', names: 'Indhu', gender: 'Female', annualsalary: '450000', dateofbirth: '08/24/1993', locations: 'Erode' },
        ];
    };
    EmployeeService = __decorate([
        core_1.Injectable()
    ], EmployeeService);
    return EmployeeService;
}());
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=employee.service.js.map