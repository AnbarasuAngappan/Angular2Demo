import { Component } from "@angular/core"

@Component({
    selector: 'my-app',
    template: `
                <div style="padding:5px">
                      You Entered Text:<input type="text" [(ngModel)] ='userTest'/>
                <br /> <br />
              <sample [getInputText]='userTest'></sample>
                <my-employeeList></my-employeeList>
                </div>
              `    
})
export class AppComponent  {   
    userTest: string = "SAI"; 
    
//<div>
//               You Entered Text:<input type="text" [(ngModel)] ='userTest'/>
//                 <br /> <br />
//               <sample [getInputText]='userTest'></sample>
//                <my-employeeList></my-employeeList>


//           </div>
    //pageheader: string = 'Welcome !..';
    //imagesource: string = 'http://intellibot.io/img/IB/logo.png';
    //fullName: string = 'Tom';
    //isDisable: boolean = false;
    //lastName: string = 'Jerry';
    //getFullName(): string{

    //    return this.fullName + '' + this.lastName;
    //}

    //applyColorClasses: string = 'boldClass italicClass';

    //applyBoldclass: boolean = true;
    //applyItalicclass: boolean = true;

    //inlineIsbold: boolean = true;
    //inlineIsItalic: boolean = true;
    //inlineIsColor: boolean = true;
    //inlineFontSize: number = 15;

    //getButtonstyle() {
    //    let a = {

    //        boldClass: this.applyBoldclass,
    //        italicClass: this.applyItalicclass
    //    };

    //    return a;
    //}

    //getStyle() {
    //    let style = {
    //        "font-weight": this.inlineIsbold ? 'bold' : 'normal',
    //        "font-style": this.inlineIsItalic ? 'italic' : 'normal',
    //        "color": this.inlineIsColor ? 'green' : 'black',
    //        "font-size.px": this.inlineFontSize
    //    }
    //    return style;
    //}
}
