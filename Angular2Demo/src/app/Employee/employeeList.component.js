"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var EmployeelistComponent = /** @class */ (function () {
    function EmployeelistComponent() {
        this.employees = [
            { empID: 'ibot01', name: 'Anbu', gender: 'Male', annualsalary: '3L', dateofbirth: '05/27/1993', location: 'Chennai' },
            { empID: 'IBOT02', name: 'Balaji', gender: 'Male', annualsalary: '4.5L', dateofbirth: '02/27/1995', location: 'Coimbatore' },
            { empID: 'iBOT03', name: 'Gowtham', gender: 'Male', annualsalary: '5.5L', dateofbirth: '08/27/1992', location: 'Coimbatore' },
            { empID: 'IBOT04', name: 'Ramesh', gender: 'Male', annualsalary: '4.8L', dateofbirth: '09/7/1945', location: 'Coimbatore' },
            { empID: 'iBOT05', name: 'Angappan', gender: 'Male', annualsalary: '5.5L', dateofbirth: '06/24/1942', location: 'Coimbatore' },
            { empID: 'iBOT06', name: 'Indhu', gender: 'Female', annualsalary: '4.5L', dateofbirth: '08/24/1993', location: 'Erode' },
        ];
    }
    EmployeelistComponent = __decorate([
        core_1.Component({
            selector: 'my-employeeList',
            templateUrl: 'app/Employee/employeeList.component.html',
            styleUrls: ['app/Employee/employeeList.component.css']
        })
    ], EmployeelistComponent);
    return EmployeelistComponent;
}());
exports.EmployeelistComponent = EmployeelistComponent;
//export class EmployeelistComponent {
//    power = 5;
//    factor = 1;
//}
//# sourceMappingURL=employeeList.component.js.map