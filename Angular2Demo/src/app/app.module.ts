import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { EmployeeComponent } from './Employee/employee.component';
import { EmployeelistComponent } from './Employee/employeeList.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule],
  declarations: [ AppComponent, EmployeeComponent, EmployeelistComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
