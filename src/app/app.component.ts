import { Component, OnInit, OnDestroy } from '@angular/core';
import {
    AngularPageVisibilityService,
    OnPageVisible,
    OnPageHidden,
    OnPageVisibilityChange,
    AngularPageVisibilityStateEnum,
    OnPagePrerender,
    OnPageUnloaded,
} from 'angular-page-visibility';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less'],
})
export class AppComponent implements OnInit, OnDestroy {
    title = 'angular-page-visibility-app';
    private onPageVisibleSubscription: Subscription;
    private onPageHiddenSubscription: Subscription;
    private onPagePrerenderSubscription: Subscription;
    private onPageUnloadedSubscription: Subscription;
    private onPageVisibilityChangeSubscription: Subscription;
    private isPageVisible: boolean;

    constructor(
        private angularPageVisibilityService: AngularPageVisibilityService
    ) {}

    ngOnInit(): void {
        if (this.angularPageVisibilityService.isPageVisible()) {
            console.log('OnInit => visible');
        }
        if (this.angularPageVisibilityService.isPageHidden()) {
            console.log('OnInit => hidden');
        }
        this.onPageVisibleSubscription = this.angularPageVisibilityService.$onPageVisible.subscribe(
            () => {
                console.log('OnInit => visible');
            }
        );

        this.onPageHiddenSubscription = this.angularPageVisibilityService.$onPageHidden.subscribe(
            () => {
                console.log('OnInit => hidden');
            }
        );

        this.onPagePrerenderSubscription = this.angularPageVisibilityService.$onPagePrerender.subscribe(
            () => {
                console.log('OnInit => prerender');
            }
        );

        this.onPageUnloadedSubscription = this.angularPageVisibilityService.$onPageUnloaded.subscribe(
            () => {
                console.log('OnInit => unloaded');
            }
        );

        this.onPageVisibilityChangeSubscription = this.angularPageVisibilityService.$onPageVisibilityChange.subscribe(
            (visibilityState: AngularPageVisibilityStateEnum) => {
                if (
                    visibilityState === AngularPageVisibilityStateEnum.VISIBLE
                ) {
                    console.log('OnInit => visibilityChange => visible');
                } else if (
                    visibilityState === AngularPageVisibilityStateEnum.HIDDEN
                ) {
                    console.log('OnInit => visibilityChange => hidden');
                } else if (
                    visibilityState === AngularPageVisibilityStateEnum.PRERENDER
                ) {
                    console.log('OnInit => visibilityChange => prerender');
                } else if (
                    visibilityState === AngularPageVisibilityStateEnum.UNLOADED
                ) {
                    console.log('OnInit => visibilityChange => unloaded');
                }
            }
        );
    }

    @OnPageVisible()
    logWhenPageVisible(): void {
        console.log('OnPageVisible => visible');
        this.isPageVisible = true;
        console.log(this.isPageVisible);
        console.log(this.angularPageVisibilityService.isPageVisible());
    }

    @OnPageHidden()
    logWhenPageHidden(): void {
        console.log('OnPageHidden => hidden');
        this.isPageVisible = false;
        console.log(this.isPageVisible);
        console.log(this.angularPageVisibilityService.isPageHidden());
    }

    @OnPagePrerender()
    logWhenPagePrerender(): void {
        console.log('OnPagePrerender => prerender');
    }

    @OnPageUnloaded()
    logWhenPageUnloaded(): void {
        console.log('OnPageUnloaded => unloaded');
    }

    @OnPageVisibilityChange()
    logWhenPageVisibilityChange(
        visibilityState: AngularPageVisibilityStateEnum
    ): void {
        if (
            AngularPageVisibilityStateEnum[visibilityState] ===
            AngularPageVisibilityStateEnum[
                AngularPageVisibilityStateEnum.VISIBLE
            ]
        ) {
            console.log('OnPageVisibilityChange => visible');
        } else if (
            AngularPageVisibilityStateEnum[visibilityState] ===
            AngularPageVisibilityStateEnum[
                AngularPageVisibilityStateEnum.HIDDEN
            ]
        ) {
            console.log('OnPageVisibilityChange => hidden');
        } else if (
            AngularPageVisibilityStateEnum[visibilityState] ===
            AngularPageVisibilityStateEnum[
                AngularPageVisibilityStateEnum.PRERENDER
            ]
        ) {
            console.log('OnPageVisibilityChange => prerender');
        } else if (
            AngularPageVisibilityStateEnum[visibilityState] ===
            AngularPageVisibilityStateEnum[
                AngularPageVisibilityStateEnum.UNLOADED
            ]
        ) {
            console.log('OnPageVisibilityChange => unloaded');
        }
    }

    ngOnDestroy(): void {
        this.onPageVisibleSubscription.unsubscribe();
        this.onPageHiddenSubscription.unsubscribe();
        this.onPagePrerenderSubscription.unsubscribe();
        this.onPageUnloadedSubscription.unsubscribe();
        this.onPageVisibilityChangeSubscription.unsubscribe();
    }
}
