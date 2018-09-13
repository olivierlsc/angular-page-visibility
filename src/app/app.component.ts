import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularPageVisibilityService, OnPageVisible, OnPageHidden, OnPageVisibilityChange } from 'angular-page-visibility';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'angular-page-visibility-app';
  private onPageVisibleSubscription: Subscription;
  private onPageHiddenSubscription: Subscription;
  private onPageVisibilityChangeSubscription: Subscription;
  private isPageVisible: boolean;

  constructor(private angularPageVisibilityService: AngularPageVisibilityService) {}

  ngOnInit(): void {
    if ( this.angularPageVisibilityService.isPageVisible() ) {
      console.log( 'OnInit => visible' );
    }
    if ( this.angularPageVisibilityService.isPageHidden() ) {
      console.log( 'OnInit => hidden' );
    }
    this.onPageVisibleSubscription = this.angularPageVisibilityService.$onPageVisible.subscribe( () => {
      console.log( 'OnInit => visible' );
    } );

    this.onPageHiddenSubscription = this.angularPageVisibilityService.$onPageHidden.subscribe( () => {
      console.log( 'OnInit => hidden' );
    } );

    this.onPageVisibilityChangeSubscription = this.angularPageVisibilityService
    .$onPageVisibilityChange.subscribe( ( isPageVisible: boolean ) => {
      console.log( 'OnInit => visibilityChange' );
      if ( isPageVisible ) {
        console.log( 'OnInit => visible' );
      } else {
        console.log( 'OnInit => hidden' );
      }
    } );
  }

  @OnPageVisible()
  logWhenPageVisible (): void {
    console.log( 'OnPageVisible => visible' );
    this.isPageVisible = true;
    console.log(this.isPageVisible);
  }

  @OnPageHidden()
  logWhenPageHidden (): void {
    console.log( 'OnPageHidden => hidden' );
    this.isPageVisible = false;
    console.log(this.isPageVisible);
  }

  @OnPageVisibilityChange()
  logWhenPageVisibilityChange ( isPageVisible: boolean ): void {
    if ( isPageVisible ) {
      console.log( 'OnPageVisibilityChange => visible' );
    } else {
      console.log( 'OnPageVisibilityChange => hidden' );
    }
  }

  ngOnDestroy(): void {
    this.onPageVisibleSubscription.unsubscribe();
    this.onPageHiddenSubscription.unsubscribe();
    this.onPageVisibilityChangeSubscription.unsubscribe();
  }
}
