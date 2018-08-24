import { Component, OnInit } from "@angular/core";
import { IEmployee } from "./employee";
import { EmployeeService } from "./employee.service";

@Component({
    selector: 'my-employeeList',
    templateUrl: 'app/Employee/employeeList.component.html',
    styleUrls: ['app/Employee/employeeList.component.css'],
    providers:[EmployeeService]
    
})

export class EmployeelistComponent implements OnInit {
    employees: IEmployee[];
    errorMessage: string = "Please Wait for the Response..";
    constructor(private _employeeService : EmployeeService) {
        
    }

    ngOnInit() {
        this._employeeService.getEmployee()
            .subscribe((empdata) => this.employees = empdata,
            (error) => this.errorMessage = 'Problem With Service...');
    }
}
