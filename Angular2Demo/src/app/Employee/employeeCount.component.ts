import {Component} from "@angular/core"

@Component({
    selector: "my-employeeCount",
    templateUrl: 'app/Employee/employeeCount.component.html',
    styleUrls: ['app/Employee/employeeCount.component.css']

})

export class EmployeeCountComponent { 
    all: number = 2;  
    male: number = 1;   
    female: number = 2;
}