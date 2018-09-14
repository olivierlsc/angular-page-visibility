# @OnPageUnloaded()

Decorate the method in the controller to run when the page is status prerender.

Example:

```ts
import { Component, OnDestroy, Inject, OnInit } from '@angular/core';
import { OnPageUnloaded } from "angular-page-visibility";

@Component( {
    selector : 'app-root',
    templateUrl : './app.component.html',
    styleUrls : [ './app.component.scss' ]
} )
export class AppComponent implements OnDestroy, OnInit {
  ...
  @OnPageUnloaded()
  logWhenPageUnloaded (): void {
    console.log( 'OnPageUnloaded => unloaded' );
  }
  ...
}
```
