import { Component } from "@angular/core";

@Component({
    selector: 'my-employee',
    templateUrl: 'app/Employee/employee.component.html',
    styleUrls:['app/Employee/employee.style.css']
})

export class EmployeeComponent {
    firstname: string = 'Sai';
    lastname: string = 'Ram';
    gender: string = 'Male';
    age: number = 10;
    columnspan: number = 2;
}