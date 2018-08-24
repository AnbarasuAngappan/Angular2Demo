import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import {RouterModule,Routes} from "@angular/router"

import { AppComponent } from './app.component';
import { EmployeeComponent } from './Employee/employee.component';
import { EmployeelistComponent } from './Employee/employeeList.component';
import { EmployeeTillePipe } from './Employee/employee.Tittle.Pipe';
import { EmployeeCountComponent } from './Employee/employeeCount.component';
import { SimpleComponent } from './Employee/Others/Simple.component';
import { HomeComponent } from './Home/home.component'
import { pageNotFoundComponent } from './Employee/Others/pagenotfound.component'


const appRoutes: Routes = [
    { path: 'Home', component: HomeComponent },
    { path: 'Employee', component: EmployeelistComponent },
    { path: '', redirectTo: './Home', pathMatch: 'full' },
    { path: '**', component: pageNotFoundComponent }

];

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule,RouterModule.forRoot(appRoutes)],
    declarations: [AppComponent, EmployeeComponent, EmployeelistComponent,
        EmployeeTillePipe, EmployeeCountComponent, SimpleComponent,
        HomeComponent, pageNotFoundComponent],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
