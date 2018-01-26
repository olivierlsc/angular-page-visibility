import { Component } from '@angular/core';
import { PageVisibilityService, OnPageVisible, OnPageHidden, OnPageVisibilityChange } from "./module/angular-page-visibility/public_api";
import { Subscription } from "rxjs/Subscription";

@Component( {
  selector : 'app-root' ,
  templateUrl : './app.component.html' ,
  styleUrls : [ './app.component.scss' ]
} )
export class AppComponent {
  private onPageVisibleSubscription : Subscription;
  private onPageHiddenSubscription : Subscription;
  private onPageVisibilityChangeSubscription : Subscription;
  title = 'app';

  constructor ( private pageVisibilityService : PageVisibilityService ) {

  }

  ngOnInit () : void {
    console.log( 'OnInit' );
    if ( this.pageVisibilityService.isPageVisible() ) {
      console.log( 'visible' );
    }
    if ( this.pageVisibilityService.isPageHidden() ) {
      console.log( 'hidden' );
    }
    this.onPageVisibleSubscription = this.pageVisibilityService.$onPageVisible.subscribe( ()=> {
      console.log( 'visible' );
    } );

    this.onPageHiddenSubscription = this.pageVisibilityService.$onPageHidden.subscribe( ()=> {
      console.log( 'hidden' );
    } );

    this.onPageVisibilityChangeSubscription = this.pageVisibilityService.$onPageVisibilityChange.subscribe( ( isPageVisible : boolean ) => {
      console.log( 'visibilityChange' );
      if ( isPageVisible ) {
        console.log( 'visible' );
      } else {
        console.log( 'hidden' );
      }
    } );
  }

  @OnPageVisible()
  logWhenPageVisible () : void {
    console.log( 'OnPageVisible' );
    console.log( 'visible' );
  }

  @OnPageHidden()
  logWhenPageHidden () : void {
    console.log( 'OnPageHidden' );
    console.log( 'hidden' );
  }

  @OnPageVisibilityChange()
  logWhenPageVisibilityChange ( isPageVisible : boolean ) : void {
    console.log( 'OnPageVisibilityChange' );
    if ( isPageVisible ) {
      console.log( 'visible' );
    } else {
      console.log( 'hidden' );
    }
  }

  ngOnDestroy () : void {
    this.onPageVisibleSubscription.unsubscribe();
    this.onPageHiddenSubscription.unsubscribe();
    this.onPageVisibilityChangeSubscription.unsubscribe();
  }
}
