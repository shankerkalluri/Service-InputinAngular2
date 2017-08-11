import {Component} from '@angular/core';

@Component({
    moduleId: module.id,
    selector:'app-container',
    templateUrl:`app.component.html`
    //template:`<h1>Hello World</h1>`
})

export class AppComponent{

    message : string = "I am Parent";
    childmessage : string = "I am passed from Parent to child component"
    
}