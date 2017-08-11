import {Component, Input} from '@angular/core';

@Component({
    moduleId: module.id,
    selector:'app-about',
    templateUrl: './about.component.html'
})

export class AboutComponent{

    @Input() greetMessage: string;
}