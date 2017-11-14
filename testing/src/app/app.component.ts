import { Component, OnDestroy, Inject, OnInit } from '@angular/core';
import { PageVisibilityService, OnPageVisible, OnPageNotVisible } from "../../../src/angular-page-visibility";
import { Subscription } from "rxjs/Subscription";

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

    @OnPageVisible()
    logWhenPageVisible(){
        console.log('OnPageVisible');
        console.log('visible');
    }

    @OnPageNotVisible()
    logWhenPageNotVisible(){
        console.log('OnPageNotVisible');
        console.log('notVisible');
    }

    ngOnInit(): void {
        console.log( 'OnInit' );
        if ( this.pageVisibilityService.isPageVisible() ) {
            console.log( 'visible' );
        }
        if ( this.pageVisibilityService.isPageNotVisible() ) {
            console.log( 'notVisible' );
        }
        this.onPageVisibleSubscription = this.pageVisibilityService.$onPageVisible.subscribe( ()=> {
            console.log( 'visible' );
        } );

        this.onPageNotVisibleSubscription = this.pageVisibilityService.$onPageNotVisible.subscribe( ()=> {
            console.log( 'notVisible' );
        } );

        this.onPageVisibilityChangeSubscription = this.pageVisibilityService.$onPageVisibilityChange.subscribe( ( isPageVisible: boolean ) => {
            console.log( 'visibilityChange' );
            if ( isPageVisible ) {
                console.log( 'visible' );
            } else {
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
