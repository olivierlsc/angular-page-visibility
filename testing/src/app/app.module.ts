import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AngularPageVisibilityModule} from '../../../src/angular-page-visibility';
import {PageVisibilityService} from "../../../src/angular-page-visibility";

@NgModule( {
    declarations : [
        AppComponent
    ],
    imports : [
        BrowserModule,
        AngularPageVisibilityModule
    ],
    providers : [],
    bootstrap : [ AppComponent ]
} )
export class AppModule {
}
