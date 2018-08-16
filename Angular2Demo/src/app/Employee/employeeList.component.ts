import { Component } from "@angular/core";

@Component({
    selector: 'my-employeeList',
    templateUrl: 'app/Employee/employeeList.component.html',
    styleUrls: ['app/Employee/employeeList.component.css']
})



export class EmployeelistComponent {
    employees: any[] = [
        { empID: 'IBOT01', name: 'Anbu', gender: 'Male', annualsalary: '3L', dateofbirth: '27/05/1993', location: 'Chennai' },
        { empID: 'IBOT02', name: 'Balaji', gender: 'Male',annualsalary: '4.5L', dateofbirth: '27/02/1995', location: 'Coimbatore' },
    ]        
}