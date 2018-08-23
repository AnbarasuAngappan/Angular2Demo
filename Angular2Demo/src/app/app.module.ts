import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { EmployeeComponent } from './Employee/employee.component';
import { EmployeelistComponent } from './Employee/employeeList.component';
import { EmployeeTillePipe } from './Employee/employee.Tittle.Pipe';
import { EmployeeCountComponent } from './Employee/employeeCount.component';
import { SimpleComponent } from './Employee/Others/Simple.component';

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule],
    declarations: [AppComponent, EmployeeComponent, EmployeelistComponent,
                    EmployeeTillePipe, EmployeeCountComponent, SimpleComponent],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
