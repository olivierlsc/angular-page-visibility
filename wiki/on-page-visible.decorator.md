# @OnPageVisible()

Decorate the method in the controller to run when the page is visible.

Example:

```ts
import { Component, OnDestroy, Inject, OnInit } from '@angular/core';
import { OnPageVisible } from "angular-page-visibility";

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

    @OnPageVisible()
    logWhenPageVisible(): void {
        console.log( 'OnPageVisible' );
        console.log( 'visible' );
    }

    ngOnDestroy(): void {
    }
}
```
