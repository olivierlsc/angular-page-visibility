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
import { PageVisibilityService } from 'angular-page-visibility';
import { Subscription } from 'rxjs/Subscription';

@Component( {
    selector : 'app-root',
    templateUrl : './app.component.html',
    styleUrls : [ './app.component.scss' ]
} )
export class AppComponent implements OnDestroy, OnInit {
    private onPageVisibleSubscription: Subscription;
    private onPageNotVisibleSubscription: Subscription;
    private onPageVisibilityChangeSubscription: Subscription;
    title = 'app';

    constructor( private pageVisibilityService: PageVisibilityService ) {
    }

    ngOnInit(): void {
        this.onPageVisibleSubscription = this.pageVisibilityService.$onPageVisible.subscribe( ()=> {
            console.log( 'visible' );
        } );

        this.onPageNotVisibleSubscription = this.pageVisibilityService.$onPageNotVisible.subscribe( ()=> {
            console.log( 'notVisible' );
        } );

        this.onPageVisibilityChangeSubscription = this.pageVisibilityService.$onPageVisibilityChange.subscribe( () => {
            console.log( 'visibilityChange' );
            if ( this.pageVisibilityService.isPageVisible() ) {
                console.log( 'visible' );
            }
            if ( this.pageVisibilityService.isPageNotVisible() ) {
                console.log( 'notVisible' );
            }
        } );
    }

    ngOnDestroy(): void {
        this.onPageVisibleSubscription.unsubscribe();
        this.onPageNotVisibleSubscription.unsubscribe();
        this.onPageVisibilityChangeSubscription.unsubscribe();
    }
}

```

## For any questions, suggestions, or feature requests
[Please file an issue](https://github.com/olivierlsc/angular-page-visibility/issues)!
