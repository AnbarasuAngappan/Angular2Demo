import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { EmployeeComponent } from './Employee/employee.component';
import { EmployeelistComponent } from './Employee/employeeList.component';
import { EmployeeTillePipe } from './Employee/employee.Tittle.Pipe'
import {EmployeeCountComponent} from './Employee/employeeCount.component'

@NgModule({
  imports:      [ BrowserModule, FormsModule],
    declarations: [AppComponent, EmployeeComponent, EmployeelistComponent, EmployeeTillePipe, EmployeeCountComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
