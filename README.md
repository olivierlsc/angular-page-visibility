# Angular Page Visibility

## Getting started
First, install it.

```bash
npm install angular-page-visibility --save
```

Then, import it into your `@NgModule`:

```bash
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularPageVisibilityModule } from 'angular-page-visibility';
import { AppComponent } from './app.component';

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
```

Then, use it in your component :

```bash
import { Component, OnDestroy, Inject, OnInit } from '@angular/core';
import { PageVisibilityService, OnPageVisible, OnPageHidden, OnPageVisibilityChange } from "angular-page-visibility";
import { Subscription } from "rxjs/Subscription";

@Component( {
    selector : 'app-root',
    templateUrl : './app.component.html',
    styleUrls : [ './app.component.scss' ]
} )
export class AppComponent implements OnDestroy, OnInit {
    private onPageVisibleSubscription: Subscription;
    private onPageHiddenSubscription: Subscription;
    private onPageVisibilityChangeSubscription: Subscription;
    title = 'app';

    constructor( private pageVisibilityService: PageVisibilityService ) {

    }

    ngOnInit(): void {
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

        this.onPageVisibilityChangeSubscription = this.pageVisibilityService.$onPageVisibilityChange.subscribe( ( isPageVisible: boolean ) => {
            console.log( 'visibilityChange' );
            if ( isPageVisible ) {
                console.log( 'visible' );
            } else {
                console.log( 'hidden' );
            }
        } );
    }

    @OnPageVisible()
    logWhenPageVisible(): void {
        console.log( 'OnPageVisible' );
        console.log( 'visible' );
    }

    @OnPageHidden()
    logWhenPageNotVisible(): void {
        console.log( 'OnPageHidden' );
        console.log( 'hidden' );
    }

    @OnPageVisibilityChange()
    logWhenPageVisibilityChange( isPageVisible: boolean ): void {
        console.log( 'OnPageVisibilityChange' );
        if ( isPageVisible ) {
            console.log( 'visible' );
        } else {
            console.log( 'hidden' );
        }
    }

    ngOnDestroy(): void {
        this.onPageVisibleSubscription.unsubscribe();
        this.onPageHiddenSubscription.unsubscribe();
        this.onPageVisibilityChangeSubscription.unsubscribe();
    }
}

```

## For any questions, suggestions, or feature requests
[Please file an issue](https://github.com/olivierlsc/angular-page-visibility/issues)!
