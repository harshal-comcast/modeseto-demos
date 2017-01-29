import { Component, OnInit } from '@angular/core';
// tmp: load a demo template here

import { ES6DemoService } from './services/demos.service';

@Component({
    selector: 'es6-demos',
    templateUrl: './es6-demos.component.html',
    providers: [ES6DemoService]
})
export class ES6DemosComponent implements OnInit {

    private demoService: ES6DemoService;

    public demos: any;

    public test: any;

    constructor(demoService: ES6DemoService) {
        this.demoService = demoService;
    }

    ngOnInit() {

        this.demos = this.getTemplates('test').subscribe(
            (res) => { this.test = res; },
            (err) => { console.log('err ', err); },
            () => { console.log('complete', this.test); }
        ); 

    }

    public getTemplates(template: string) {
        return this.demoService.getTemplates(template);
    }

}