import { Component } from '@angular/core';
import {Inject} from "../../../node_modules/@angular/core/src/di/metadata";
import {PageVisibilityService} from "../../../src/angular-page-visibility";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(private pageVisibilityService: PageVisibilityService){
    this.pageVisibilityService.$onPageVisible.subscribe(()=>{
      console.log('visible');
    });

    this.pageVisibilityService.$onPageNotVisible.subscribe(()=>{
      console.log('notVisible');
    });
  }
}
