import { Component } from "@angular/core";
import { IEmployee } from "./employee";
import { EmployeeService } from "./employee.service";

@Component({
    selector: 'my-employeeList',
    templateUrl: 'app/Employee/employeeList.component.html',
    styleUrls: ['app/Employee/employeeList.component.css'],
    providers:[EmployeeService]
    
})

export class EmployeelistComponent {
    employees: IEmployee[];
    constructor(private _employeeService : EmployeeService) {
        this.employees = _employeeService.getEmployee();
    }
}
