import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { es6DemosRoutes } from './es6-demos.routes';
import { ES6DemoService } from './services/demos.service';
import { ES6DemosComponent } from './es6-demos.component';

@NgModule({
    imports: [
        HttpModule,
        RouterModule.forChild(es6DemosRoutes),
        MaterialModule
    ],
    declarations: [
        ES6DemosComponent
    ],
    providers: [
        ES6DemoService
    ]
})
export class ES6DemoModule {

}
