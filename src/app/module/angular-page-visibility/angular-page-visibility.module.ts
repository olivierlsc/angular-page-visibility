import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PageVisibilityService} from "./page-visibility.service";

@NgModule( {
  imports : [
    CommonModule
  ] ,
  declarations : [] ,
  providers : [ PageVisibilityService ]
} )
export class AngularPageVisibilityModule {
}
