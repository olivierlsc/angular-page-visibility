import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import { Observable, Subject } from "rxjs";
import { AngularPageVisibilityStateEnum } from "./angular-page-visibility.state.enum";
import {isPlatformServer} from '@angular/common';

class HiddenKeyConstant {
  static DEFAULT = "hidden";
  static MS = "msHidden";
  static WEB_KIT = "webkitHidden";
}

class VisibilityStatusConstant {
  static VISIBLE = "visible";
  static HIDDEN = "hidden";
  static PRERENDER = "prerender";
  static UNLOADED = "unloaded";
}

@Injectable({
  providedIn: "root"
})
export class AngularPageVisibilityService {
  private onPageVisibleSource: Subject<void> = new Subject<void>();
  private onPageHiddenSource: Subject<void> = new Subject<void>();
  private onPagePrerenderSource: Subject<void> = new Subject<void>();
  private onPageUnloadedSource: Subject<void> = new Subject<void>();
  private onPageVisibilityChangeSource: Subject<
    AngularPageVisibilityStateEnum
  > = new Subject<AngularPageVisibilityStateEnum>();
  private hidden: string;
  private visibilityChange: string;
  private visibilityState: string;
  private document: Document;
  $onPageVisible: Observable<void> = this.onPageVisibleSource.asObservable();
  $onPageHidden: Observable<void> = this.onPageHiddenSource.asObservable();
  $onPagePrerender: Observable<
    void
  > = this.onPagePrerenderSource.asObservable();
  $onPageUnloaded: Observable<void> = this.onPageUnloadedSource.asObservable();
  $onPageVisibilityChange: Observable<
    AngularPageVisibilityStateEnum
  > = this.onPageVisibilityChangeSource.asObservable();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.addEventListenerVibilityChange();
  }

  isPageVisible(): boolean {
    return (
      VisibilityStatusConstant.VISIBLE === this.getVisibilityState() ||
      !this.isHidden()
    );
  }

  isPageHidden(): boolean {
    return (
      VisibilityStatusConstant.HIDDEN === this.getVisibilityState() ||
      this.isHidden()
    );
  }

  isPagePrerender(): boolean {
    return VisibilityStatusConstant.PRERENDER === this.getVisibilityState();
  }

  isPageUnloaded(): boolean {
    return VisibilityStatusConstant.UNLOADED === this.getVisibilityState();
  }

  private isHidden(): boolean {
    return document[this.hidden];
  }

  private getVisibilityState(): string {
    return document[this.visibilityState];
  }

  private defineBrowserSupport() {
    if (typeof document[HiddenKeyConstant.DEFAULT] !== "undefined") {
      // Opera 12.10 and Firefox 18 and later support
      this.hidden = HiddenKeyConstant.DEFAULT;
      this.visibilityChange = "visibilitychange";
      this.visibilityState = "visibilityState";
    } else if (typeof document[HiddenKeyConstant.MS] !== "undefined") {
      this.hidden = HiddenKeyConstant.MS;
      this.visibilityChange = "msvisibilitychange";
      this.visibilityState = "msVisibilityState";
    } else if (typeof document[HiddenKeyConstant.WEB_KIT] !== "undefined") {
      this.hidden = HiddenKeyConstant.WEB_KIT;
      this.visibilityChange = "webkitvisibilitychange";
      this.visibilityState = "webkitVisibilityState";
    }
  }

  private addEventListenerVibilityChange(): void {
    if (isPlatformServer(this.platformId)) {
      return;
    }

    this.defineBrowserSupport();
    document.addEventListener(
      this.visibilityChange,
      () => {
        const vibilityState = this.getVisibilityState();
        switch (vibilityState) {
          case VisibilityStatusConstant.VISIBLE:
            this.onPageVisibilityChangeSource.next(
              AngularPageVisibilityStateEnum.VISIBLE
            );
            this.onPageVisibleSource.next();
            break;
          case VisibilityStatusConstant.HIDDEN:
            this.onPageVisibilityChangeSource.next(
              AngularPageVisibilityStateEnum.HIDDEN
            );
            this.onPageHiddenSource.next();
            break;
          case VisibilityStatusConstant.PRERENDER:
            this.onPageVisibilityChangeSource.next(
              AngularPageVisibilityStateEnum.PRERENDER
            );
            this.onPagePrerenderSource.next();
            break;
          case VisibilityStatusConstant.UNLOADED:
            this.onPageVisibilityChangeSource.next(
              AngularPageVisibilityStateEnum.UNLOADED
            );
            this.onPageUnloadedSource.next();
            break;
          default:
            if (this.isHidden()) {
              this.onPageVisibilityChangeSource.next(
                AngularPageVisibilityStateEnum.HIDDEN
              );
              this.onPageHiddenSource.next();
            } else {
              this.onPageVisibilityChangeSource.next(
                AngularPageVisibilityStateEnum.VISIBLE
              );
              this.onPageVisibleSource.next();
            }
        }
      },
      false
    );
  }
}
