import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';

import { ES6DemoModule } from './modules/es6-demos/es6-demos.module';

import { modestoRoutes } from './modesto.routes';
import { ModestoRootComponent } from './modesto-root.component';
import { ModestoHomeComponent } from './components/home/modesto-home.component';

@NgModule({
    imports: [
        BrowserModule,
        MaterialModule.forRoot(),
        ES6DemoModule,
        RouterModule.forRoot(modestoRoutes)
    ],
    declarations: [
        ModestoRootComponent,
        ModestoHomeComponent        
    ],
    bootstrap: [
        ModestoRootComponent
    ]
})
export class ModestoModule {

}
