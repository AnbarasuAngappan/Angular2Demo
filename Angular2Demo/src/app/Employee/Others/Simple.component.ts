import { Component,Input,OnChanges,SimpleChanges } from "@angular/core";

@Component({

    selector: "sample",
    template: `
               <div>
                   You Get Text: {{getInputText}}
                  
               </div>
                    `    
})

export class SimpleComponent implements OnChanges {
    @Input() getInputText: string;

    ngOnChanges(changes: SimpleChanges) {
        for (let propertyName in changes) {
            let change = changes[propertyName];
            let current = JSON.stringify(change.currentValue);
            let previous = JSON.stringify(change.previousValue);
            console.log(propertyName + ':Current Value' + current , ',Previous Value' + previous);
        }
    }
}