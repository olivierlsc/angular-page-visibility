import { Component, OnDestroy, Inject, OnInit } from '@angular/core';
import {PageVisibilityService} from "../../../src/angular-page-visibility";
import {Subscription} from "rxjs/Subscription";

@Component( {
    selector : 'app-root',
    templateUrl : './app.component.html',
    styleUrls : [ './app.component.scss' ]
} )
export class AppComponent implements OnDestroy, OnInit {
    private onPageVisibleSubscription: Subscription;
    private onPageNotVisibleSubscription: Subscription;
    title = 'app';

    constructor( private pageVisibilityService: PageVisibilityService ) {
        this.onPageVisibleSubscription = this.pageVisibilityService.$onPageVisible.subscribe( ()=> {
            console.log( 'visible' );
        } );

        this.onPageNotVisibleSubscription = this.pageVisibilityService.$onPageNotVisible.subscribe( ()=> {
            console.log( 'notVisible' );
        } );
    }

    ngOnInit(): void {
        if ( this.pageVisibilityService.isPageVisible() ) {
            console.log( 'visible' );
        }
        if ( this.pageVisibilityService.isPageNotVisible() ) {
            console.log( 'notVisible' );
        }
    }

    ngOnDestroy(): void {
        this.onPageVisibleSubscription.unsubscribe();
        this.onPageNotVisibleSubscription.unsubscribe();
    }
}
