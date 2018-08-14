import { Component } from "@angular/core";

@Component({
    selector: 'my-app',
    template: `
               <div>
                    <h1>{{pageheader + getFullName()}}</h1>    
                    <img src="{{imagesource}}" />
                    <my-employee></my-employee>
                    <input disabled = '{{isDisable}}' type="button" value="Click Me"  />
                    <button disabled = '{{isDisable}}'>Click ME</button>
                    <button [disabled] = 'isDisable'>Click ME</button>
               </div>
                    `    
})
export class AppComponent  {   
    pageheader: string = 'Welcome !..';
    imagesource: string = 'http://intellibot.io/img/IB/logo.png';
    fullName: string = 'Tom';
    isDisable: boolean = false;
    lastName: string = 'Jerry';
    getFullName(): string{

        return this.fullName + '' + this.lastName;
    }
}
