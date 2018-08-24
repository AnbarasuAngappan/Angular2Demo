"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var employee_service_1 = require("./employee.service");
var EmployeelistComponent = /** @class */ (function () {
    function EmployeelistComponent(_employeeService) {
        this._employeeService = _employeeService;
        this.errorMessage = "Please Wait for the Response..";
    }
    EmployeelistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._employeeService.getEmployee()
            .subscribe(function (empdata) { return _this.employees = empdata; }, function (error) { return _this.errorMessage = 'Problem With Service...'; });
    };
    EmployeelistComponent = __decorate([
        core_1.Component({
            selector: 'my-employeeList',
            templateUrl: 'app/Employee/employeeList.component.html',
            styleUrls: ['app/Employee/employeeList.component.css'],
            providers: [employee_service_1.EmployeeService]
        }),
        __metadata("design:paramtypes", [employee_service_1.EmployeeService])
    ], EmployeelistComponent);
    return EmployeelistComponent;
}());
exports.EmployeelistComponent = EmployeelistComponent;
//# sourceMappingURL=employeeList.component.js.map