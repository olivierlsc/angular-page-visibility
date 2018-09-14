import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { AngularPageVisibilityStateEnum } from './angular-page-visibility.state.enum';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AngularPageVisibilityService {
  private static HIDDEN = 'hidden';
  private static MS_HIDDEN = 'msHidden';
  private static WEB_KIT_HIDDEN = 'webkitHidden';
  private static STATUS_VISIBLE = 'visible';
  private static STATUS_HIDDEN = 'hidden';
  private static STATUS_PRERENDER = 'prerender';
  private static STATUS_UNLOADED = 'unloaded';
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

  constructor (@Inject(DOCUMENT) private document: Document|any) {
    this.addEventListenerVibilityChange();
  }

  isPageVisible (): boolean {
    return AngularPageVisibilityService.STATUS_VISIBLE === this.getVisibilityState() || ! this.isHidden();
  }

  isPageHidden (): boolean {
    return AngularPageVisibilityService.STATUS_HIDDEN === this.getVisibilityState() || this.isHidden();
  }

  isPagePrerender(): boolean {
    return AngularPageVisibilityService.STATUS_PRERENDER === this.getVisibilityState();
  }

  isPageUnloaded(): boolean {
    return AngularPageVisibilityService.STATUS_UNLOADED === this.getVisibilityState();
  }

  private isHidden(): boolean {
    console.log('service ' + this.document[ this.hidden ]);
    return this.document[ this.hidden ];
  }

  private getVisibilityState(): string {
    return this.document[this.visibilityState];
  }

  private defineBrowserSupport () {
    if ( typeof this.document[ AngularPageVisibilityService.HIDDEN ] !== 'undefined' ) { // Opera 12.10 and Firefox 18 and later support
      this.hidden = 'hidden';
      this.visibilityChange = 'visibilitychange';
      this.visibilityState = 'visibilityState';
    } else if ( typeof this.document[ AngularPageVisibilityService.MS_HIDDEN ] !== 'undefined' ) {
      this.hidden = 'msHidden';
      this.visibilityChange = 'msvisibilitychange';
      this.visibilityState = 'msVisibilityState';
    } else if ( typeof this.document[ AngularPageVisibilityService.WEB_KIT_HIDDEN ] !== 'undefined' ) {
      this.hidden = 'webkitHidden';
      this.visibilityChange = 'webkitvisibilitychange';
      this.visibilityState = 'webkitVisibilityState';
    }
  }

  private addEventListenerVibilityChange (): void {
    this.defineBrowserSupport();
    document.addEventListener( this.visibilityChange , () => {
      const vibilityState = this.getVisibilityState();
      switch (vibilityState) {
          case AngularPageVisibilityService.STATUS_VISIBLE:
            this.onPageVisibilityChangeSource.next( AngularPageVisibilityStateEnum.VISIBLE );
            this.onPageVisibleSource.next();
            break;
          case AngularPageVisibilityService.STATUS_HIDDEN:
            this.onPageVisibilityChangeSource.next( AngularPageVisibilityStateEnum.HIDDEN );
            this.onPageHiddenSource.next();
            break;
          case AngularPageVisibilityService.STATUS_PRERENDER:
            this.onPageVisibilityChangeSource.next( AngularPageVisibilityStateEnum.PRERENDER );
            this.onPagePrerenderSource.next();
            break;
          case AngularPageVisibilityService.STATUS_UNLOADED:
            this.onPageVisibilityChangeSource.next( AngularPageVisibilityStateEnum.UNLOADED );
            this.onPageUnloadedSource.next();
            break;
          default:
            if ( this.isHidden() ) {
              this.onPageVisibilityChangeSource.next( AngularPageVisibilityStateEnum.HIDDEN );
              this.onPageHiddenSource.next();
            } else {
              this.onPageVisibilityChangeSource.next( AngularPageVisibilityStateEnum.VISIBLE );
              this.onPageVisibleSource.next();
            }
      }
    } , false );
  }
}
