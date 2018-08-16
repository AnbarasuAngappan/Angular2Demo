import { Component, Input } from "@angular/core";

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
    showDetails: boolean = true;
    title = 'Tour of Heroes';    
    heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
    myHero: string = this.heroes[2];
    name: string = 'Sai';

    //onClick(): void {
    //    alert("Button Clicked");        
    //}

    toogleDetails(): void {
    this.showDetails = !this.showDetails;
    }
}