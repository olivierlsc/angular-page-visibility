import {Injectable} from '@angular/core';
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";

@Injectable()
export class PageVisibilityService {
    private static HIDDEN: string = "hidden";
    private static MS_HIDDEN: string = "msHidden";
    private static WEB_KIT_HIDDEN: string = "webkitHidden";
    private onPageVisibleSource: Subject<void> = new Subject<void>();
    private onPageNotVisibleSource: Subject<void> = new Subject<void>();
    private onPageVisibilityChangeSource: Subject<void> = new Subject<void>();
    private hidden: string;
    private visibilityChange: string;
    $onPageVisible: Observable<void> = this.onPageVisibleSource.asObservable();
    $onPageNotVisible: Observable<void> = this.onPageNotVisibleSource.asObservable();
    $onPageVisibilityChange: Observable<void> = this.onPageVisibilityChangeSource.asObservable();

    constructor() {
        this.init();
        this.listenPageVisibility();
    }

    isPageVisible(): boolean {
        return ! this.isPageNotVisible();
    };

    isPageNotVisible(): boolean {
        return document[ this.hidden ];
    }

    private init() {
        if ( typeof document[ PageVisibilityService.HIDDEN ] !== "undefined" ) { // Opera 12.10 and Firefox 18 and later support
            this.hidden = PageVisibilityService.HIDDEN;
            this.visibilityChange = "visibilitychange";
        }
        else if ( typeof document[ PageVisibilityService.MS_HIDDEN ] !== "undefined" ) {
            this.hidden = PageVisibilityService.MS_HIDDEN;
            this.visibilityChange = "msvisibilitychange";
        } else if ( typeof document[ PageVisibilityService.WEB_KIT_HIDDEN ] !== "undefined" ) {
            this.hidden = PageVisibilityService.WEB_KIT_HIDDEN;
            this.visibilityChange = "webkitvisibilitychange";
        }
    }

    private listenPageVisibility(): void {
        document.addEventListener( this.visibilityChange, () => {
            this.onPageVisibilityChangeSource.next();
            if ( this.isPageVisible() ) {
                this.onPageVisibleSource.next();
            } else {
                this.onPageNotVisibleSource.next();
            }
        }, false );
    }
}