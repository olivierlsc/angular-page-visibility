import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {AngularPageVisibilityModule} from "./module/angular-page-visibility/angular-page-visibility.module";


@NgModule( {
  declarations : [
    AppComponent
  ] ,
  imports : [
    BrowserModule ,
    AngularPageVisibilityModule
  ] ,
  providers : [] ,
  bootstrap : [ AppComponent ]
} )
export class AppModule {
}
