# @OnPageHidden()

Decorate the method in the controller to run when the page is hidden.

Example:

```ts
import { Component, OnDestroy, Inject, OnInit } from '@angular/core';
import { OnPageHidden } from "angular-page-visibility";

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

    @OnPageHidden()
    logWhenPageHidden(): void {
        console.log( 'OnPageHidden' );
        console.log( 'hidden' );
    }

    ngOnDestroy(): void {
    }
}
```
