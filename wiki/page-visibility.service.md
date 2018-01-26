# PageVisibilityService

## .isPageVisible(): boolean

Return true if page is visible.

Example:

```ts
import { Component } from '@angular/core';
import { PageVisibilityService } from "./module/angular-page-visibility/public_api";
import { Subscription } from "rxjs/Subscription";

@Component( {
  selector : 'app-root' ,
  templateUrl : './app.component.html' ,
  styleUrls : [ './app.component.scss' ]
} )
export class AppComponent {
  title = 'app';

  constructor ( private pageVisibilityService : PageVisibilityService ) {

  }

  ngOnInit () : void {
    console.log( 'OnInit' );
    if ( this.pageVisibilityService.isPageVisible() ) {
      console.log( 'visible' );
    }
  }

  ngOnDestroy () : void {
  }
}
```

## .isPageHidden(): boolean

Return true if page is hidden.

Example:

```ts
import { Component } from '@angular/core';
import { PageVisibilityService } from "./module/angular-page-visibility/public_api";
import { Subscription } from "rxjs/Subscription";

@Component( {
  selector : 'app-root' ,
  templateUrl : './app.component.html' ,
  styleUrls : [ './app.component.scss' ]
} )
export class AppComponent {
  title = 'app';

  constructor ( private pageVisibilityService : PageVisibilityService ) {

  }

  ngOnInit () : void {
    console.log( 'OnInit' );
    if ( this.pageVisibilityService.isPageHidden() ) {
      console.log( 'hidden' );
    }
  }

  ngOnDestroy () : void {
  }
}
```

## .$onPageVisible : Observable<void>

Return Observable<void> to run if page visible.

Example:

```ts
import { Component } from '@angular/core';
import { PageVisibilityService } from "./module/angular-page-visibility/public_api";
import { Subscription } from "rxjs/Subscription";

@Component( {
  selector : 'app-root' ,
  templateUrl : './app.component.html' ,
  styleUrls : [ './app.component.scss' ]
} )
export class AppComponent {
  private onPageVisibleSubscription : Subscription;
  title = 'app';

  constructor ( private pageVisibilityService : PageVisibilityService ) {

  }

  ngOnInit () : void {
    console.log( 'OnInit' );
    this.onPageVisibleSubscription = this.pageVisibilityService.$onPageVisible.subscribe( ()=> {
      console.log( 'visible' );
    } );
  }

  ngOnDestroy () : void {
    this.onPageVisibleSubscription.unsubscribe();
  }
}
```

## .$onPageHidden : Observable<void>

Return Observable<void> to run if page hidden.

Example:

```ts
import { Component } from '@angular/core';
import { PageVisibilityService } from "./module/angular-page-visibility/public_api";
import { Subscription } from "rxjs/Subscription";

@Component( {
  selector : 'app-root' ,
  templateUrl : './app.component.html' ,
  styleUrls : [ './app.component.scss' ]
} )
export class AppComponent {
  private onPageHiddenSubscription : Subscription;
  title = 'app';

  constructor ( private pageVisibilityService : PageVisibilityService ) {

  }

  ngOnInit () : void {
    console.log( 'OnInit' );
    this.onPageHiddenSubscription = this.pageVisibilityService.$onPageHidden.subscribe( ()=> {
      console.log( 'hidden' );
    } );
  }

  ngOnDestroy () : void {
    this.onPageHiddenSubscription.unsubscribe();
  }
}
```

## .$onPageVisibilityChange  : Observable<void>

Return Observable<void> to run if page visibility change.

Example:

```ts
import { Component } from '@angular/core';
import { PageVisibilityService } from "./module/angular-page-visibility/public_api";
import { Subscription } from "rxjs/Subscription";

@Component( {
  selector : 'app-root' ,
  templateUrl : './app.component.html' ,
  styleUrls : [ './app.component.scss' ]
} )
export class AppComponent {
  private onPageVisibilityChangeSubscription : Subscription;
  title = 'app';

  constructor ( private pageVisibilityService : PageVisibilityService ) {

  }

  ngOnInit () : void {
    console.log( 'OnInit' );
    this.onPageVisibilityChangeSubscription = this.pageVisibilityService.$onPageVisibilityChange.subscribe( ( isPageVisible : boolean ) => {
      console.log( 'visibilityChange' );
      if ( isPageVisible ) {
        console.log( 'visible' );
      } else {
        console.log( 'hidden' );
      }
    } );
  }

  ngOnDestroy () : void {
    this.onPageVisibilityChangeSubscription.unsubscribe();
  }
}
```
