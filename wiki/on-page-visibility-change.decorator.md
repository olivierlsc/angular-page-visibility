# @OnPageVisibilityChange()

Decorate the method in the controller to run when the page visibility change.

Example:

```ts
import { Component, OnDestroy, Inject, OnInit } from '@angular/core';
import { OnPageVisibilityChange, AngularPageVisibilityStateEnum } from "angular-page-visibility";

@Component( {
    selector : 'app-root',
    templateUrl : './app.component.html',
    styleUrls : [ './app.component.scss' ]
} )
export class AppComponent implements OnDestroy, OnInit {
  ...
  @OnPageVisibilityChange()
  logWhenPageVisibilityChange ( visibilityState: AngularPageVisibilityStateEnum ): void {
    if ( AngularPageVisibilityStateEnum[visibilityState]
      === AngularPageVisibilityStateEnum[AngularPageVisibilityStateEnum.VISIBLE]) {
      console.log( 'OnPageVisibilityChange => visible' );
    } else if (AngularPageVisibilityStateEnum[visibilityState]
      === AngularPageVisibilityStateEnum[AngularPageVisibilityStateEnum.HIDDEN]) {
      console.log( 'OnPageVisibilityChange => hidden' );
    } else if (AngularPageVisibilityStateEnum[visibilityState]
      === AngularPageVisibilityStateEnum[AngularPageVisibilityStateEnum.PRERENDER]) {
      console.log( 'OnPageVisibilityChange => prerender' );
    } else if (AngularPageVisibilityStateEnum[visibilityState]
      === AngularPageVisibilityStateEnum[AngularPageVisibilityStateEnum.UNLOADED]) {
      console.log( 'OnPageVisibilityChange => unloaded' );
    }
  }
  ...
}
```
