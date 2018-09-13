import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { AngularPageVisibilityStateEnum } from './angular-page-visibility.state.enum';

@Injectable({
  providedIn: 'root'
})
export class AngularPageVisibilityService {
  private static HIDDEN = 'hidden';
  private static MS_HIDDEN = 'msHidden';
  private static WEB_KIT_HIDDEN = 'webkitHidden';
  private onPageVisibleSource: Subject<void> = new Subject<void> ();
  private onPageHiddenSource: Subject<void> = new Subject<void> ();
  private onPagePrerenderSource: Subject<void> = new Subject<void> ();
  private onPageUnloadedSource: Subject<void> = new Subject<void> ();
  private onPageVisibilityChangeSource: Subject<AngularPageVisibilityStateEnum> = new Subject<AngularPageVisibilityStateEnum> ();
  private hidden: string;
  private visibilityChange: string;
  private visibilityState: string;
  $onPageVisible: Observable<void> = this.onPageVisibleSource.asObservable();
  $onPageHidden: Observable<void> = this.onPageHiddenSource.asObservable();
  $onPagePrerender: Observable<void> = this.onPagePrerenderSource.asObservable();
  $onPageUnloaded: Observable<void> = this.onPageUnloadedSource.asObservable();
  $onPageVisibilityChange: Observable<AngularPageVisibilityStateEnum> = this.onPageVisibilityChangeSource.asObservable();

  constructor () {
    this.addEventListenerVibilityChange();
  }

  isPageVisible (): boolean {
    return ! this.isPageHidden();
  }

  isPageHidden (): boolean {
    return document[ this.hidden ];
  }

  private defineBrowserSupport () {
    if ( typeof document[ AngularPageVisibilityService.HIDDEN ] !== 'undefined' ) { // Opera 12.10 and Firefox 18 and later support
      this.hidden = AngularPageVisibilityService.HIDDEN;
      this.visibilityChange = 'visibilitychange';
      this.visibilityState = 'visibilityState';
    } else if ( typeof document[ AngularPageVisibilityService.MS_HIDDEN ] !== 'undefined' ) {
      this.hidden = AngularPageVisibilityService.MS_HIDDEN;
      this.visibilityChange = 'msvisibilitychange';
      this.visibilityState = 'msVisibilityState';
    } else if ( typeof document[ AngularPageVisibilityService.WEB_KIT_HIDDEN ] !== 'undefined' ) {
      this.hidden = AngularPageVisibilityService.WEB_KIT_HIDDEN;
      this.visibilityChange = 'webkitvisibilitychange';
      this.visibilityState = 'webkitVisibilityState';
    }
  }

  private addEventListenerVibilityChange (): void {
    this.defineBrowserSupport();
    document.addEventListener( this.visibilityChange , () => {
      const vibilityState = document[this.visibilityState];
      switch (vibilityState) {
          case AngularPageVisibilityStateEnum.VISIBLE:
            this.onPageVisibilityChangeSource.next( AngularPageVisibilityStateEnum.VISIBLE );
            this.onPageVisibleSource.next();
            break;
          case AngularPageVisibilityStateEnum.HIDDEN:
            this.onPageVisibilityChangeSource.next( AngularPageVisibilityStateEnum.HIDDEN );
            this.onPageHiddenSource.next();
            break;
          case AngularPageVisibilityStateEnum.PRERENDER:
            this.onPageVisibilityChangeSource.next( AngularPageVisibilityStateEnum.PRERENDER );
            this.onPagePrerenderSource.next();
            break;
          case AngularPageVisibilityStateEnum.UNLOADED:
            this.onPageVisibilityChangeSource.next( AngularPageVisibilityStateEnum.UNLOADED );
            this.onPageUnloadedSource.next();
            break;
          default:
            if ( this.isPageVisible() ) {
              this.onPageVisibilityChangeSource.next( AngularPageVisibilityStateEnum.VISIBLE );
              this.onPageVisibleSource.next();
            } else {
              this.onPageVisibilityChangeSource.next( AngularPageVisibilityStateEnum.HIDDEN );
              this.onPageHiddenSource.next();
            }
      }
    } , false );
  }
}
