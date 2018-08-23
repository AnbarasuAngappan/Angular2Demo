import { IEmployee } from "./employee";
import { Injectable } from "@angular/core";

@Injectable()
export class EmployeeService {
    getEmployee() : IEmployee[]{
        return [
            { empID: 'ibot01', names: 'Anbu', gender: 'Male', annualsalary: '300000', dateofbirth: '05/27/1993', locations: 'Chennai' },
            { empID: 'IBOT02', names: 'Balaji', gender: 'Male', annualsalary: '450000', dateofbirth: '02/27/1995', locations: 'Coimbatore' },
            { empID: 'iBOT03', names: 'Gowtham', gender: 'Male', annualsalary: '550000', dateofbirth: '08/27/1992', locations: 'Coimbatore' },
            { empID: 'IBOT04', names: 'Ramesh', gender: 'Male', annualsalary: '480000', dateofbirth: '09/7/1945', locations: 'Coimbatore' },
            { empID: 'iBOT05', names: 'Angappan', gender: 'Male', annualsalary: '550000', dateofbirth: '06/24/1942', locations: 'Coimbatore' },
            { empID: 'iBOT06', names: 'Indhu', gender: 'Female', annualsalary: '450000', dateofbirth: '08/24/1993', locations: 'Erode' },
        ];
    }
}