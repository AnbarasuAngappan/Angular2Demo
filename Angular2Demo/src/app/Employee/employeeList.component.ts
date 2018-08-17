import { Component } from "@angular/core";

@Component({
    selector: 'my-employeeList',
    templateUrl: 'app/Employee/employeeList.component.html',
    styleUrls: ['app/Employee/employeeList.component.css']
})



export class EmployeelistComponent {
    employees: any[] = [
        { empID: 'ibot01', name: 'Anbu', gender: 'Male', annualsalary: '3L', dateofbirth: '05/27/1993', location: 'Chennai' },
        { empID: 'IBOT02', name: 'Balaji', gender: 'Male', annualsalary: '4.5L', dateofbirth: '02/27/1995', location: 'Coimbatore' },
        { empID: 'iBOT03', name: 'Gowtham', gender: 'Male', annualsalary: '5.5L', dateofbirth: '08/27/1992', location: 'Coimbatore' },
        { empID: 'IBOT04', name: 'Ramesh', gender: 'Male', annualsalary: '4.8L', dateofbirth: '09/7/1945', location: 'Coimbatore' },
        { empID: 'iBOT05', name: 'Angappan', gender: 'Male', annualsalary: '5.5L', dateofbirth: '06/24/1942', location: 'Coimbatore' },
        { empID: 'iBOT06', name: 'Indhu', gender: 'Female', annualsalary: '4.5L', dateofbirth: '08/24/1993', location: 'Erode' },
    ]        
}



//export class EmployeelistComponent {
//    power = 5;
//    factor = 1;
//}