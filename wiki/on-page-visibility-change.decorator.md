# @OnPageVisibilityChange()

Decorate the method in the controller to run when the page visibility change.

Example:

```ts
import { Component, OnDestroy, Inject, OnInit } from '@angular/core';
import { OnPageVisibilityChange } from "angular-page-visibility";

@Component( {
    selector : 'app-root',
    templateUrl : './app.component.html',
    styleUrls : [ './app.component.scss' ]
} )
export class AppComponent implements OnDestroy, OnInit {
    title = 'app';

    constructor() {
    }

    ngOnInit(): void {
    }

    @OnPageVisibilityChange()
    logWhenPageVisibilityChange ( isPageVisible : boolean ) : void {
      console.log( 'OnPageVisibilityChange' );
      if ( isPageVisible ) {
        console.log( 'visible' );
      } else {
        console.log( 'hidden' );
      }
    }

    ngOnDestroy(): void {
    }
}
```
