# PageVisibilityService

## .isPageVisible(): boolean

Return true if page is visible.

Example:

```ts
import { Component } from '@angular/core';
import { AngularPageVisibilityService } from 'angular-page-visibility';
import { Subscription } from "rxjs/Subscription";

@Component( {
  selector : 'app-root' ,
  templateUrl : './app.component.html' ,
  styleUrls : [ './app.component.scss' ]
} )
export class AppComponent {
  ...
  constructor () {
    if ( this.angularPageVisibilityService.isPageVisible() ) {
      console.log( 'OnInit => visible' );
    }
  }
  ...
}
```

## .isPageHidden(): boolean

Return true if page is hidden.

Example:

```ts
import { Component } from '@angular/core';
import { AngularPageVisibilityService } from 'angular-page-visibility';
import { Subscription } from "rxjs/Subscription";

@Component( {
  selector : 'app-root' ,
  templateUrl : './app.component.html' ,
  styleUrls : [ './app.component.scss' ]
} )
export class AppComponent {
  ...
  constructor () {
    if ( this.angularPageVisibilityService.isPageHidden() ) {
      console.log( 'OnInit => hidden' );
    }
  }
  ...
}
```

## .isPagePrerender(): boolean

Return true if page status is prerender.

Example:

```ts
import { Component } from '@angular/core';
import { AngularPageVisibilityService } from 'angular-page-visibility';
import { Subscription } from "rxjs/Subscription";

@Component( {
  selector : 'app-root' ,
  templateUrl : './app.component.html' ,
  styleUrls : [ './app.component.scss' ]
} )
export class AppComponent {
  ...
  constructor () {
    if ( this.angularPageVisibilityService.isPagePrerender() ) {
      console.log( 'constructor => prerender' );
    }
  }
  ...
}
```

## .isPageUnloaded(): boolean

Return true if page status is unloaded.

Example:

```ts
import { Component } from '@angular/core';
import { AngularPageVisibilityService } from 'angular-page-visibility';
import { Subscription } from "rxjs/Subscription";

@Component( {
  selector : 'app-root' ,
  templateUrl : './app.component.html' ,
  styleUrls : [ './app.component.scss' ]
} )
export class AppComponent {
  ...
  constructor () {
    if ( this.angularPageVisibilityService.isPageUnloaded() ) {
      console.log( 'constructor => unloaded' );
    }
  }
  ...
}

## .$onPageVisible : Observable<void>

Return Observable<void> to run if page is visible.

Example:

```ts

import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularPageVisibilityService } from 'angular-page-visibility';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit, OnDestroy {
  private onPageVisibleSubscription: Subscription;

  constructor(private angularPageVisibilityService: AngularPageVisibilityService) {}

  ngOnInit(): void {
    this.onPageVisibleSubscription = this.angularPageVisibilityService.$onPageVisible.subscribe( () => {
      console.log( 'OnInit => visible' );
    } );
  }

  ngOnDestroy(): void {
    this.onPageVisibleSubscription.unsubscribe();
  }
}

```

## .$onPageHidden : Observable<void>

Return Observable<void> to run if page is hidden.

Example:

```ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularPageVisibilityService } from 'angular-page-visibility';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit, OnDestroy {
  private onPageHiddenSubscription: Subscription;

  constructor(private angularPageVisibilityService: AngularPageVisibilityService) {}

  ngOnInit(): void {
    this.onPageHiddenSubscription = this.angularPageVisibilityService.$onPageHidden.subscribe( () => {
      console.log( 'OnInit => hidden' );
    } );
  }

  ngOnDestroy(): void {
    this.onPageHiddenSubscription.unsubscribe();
  }
}

```

## .$onPagePrerender : Observable<void>

Return Observable<void> to run if page status is prerender.

Example:

```ts

import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularPageVisibilityService } from 'angular-page-visibility';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit, OnDestroy {
  private onPagePrerenderSubscription: Subscription;

  constructor(private angularPageVisibilityService: AngularPageVisibilityService) {}

  ngOnInit(): void {
    this.onPagePrerenderSubscription = this.angularPageVisibilityService.$onPagePrerender.subscribe( () => {
      console.log( 'OnInit => prerender' );
    });
  }

  ngOnDestroy(): void {
    this.onPagePrerenderSubscription.unsubscribe();
  }
}

```

## .$onPageUnloaded : Observable<void>

Return Observable<void> to run if page status is unloaded.

Example:

```ts

import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularPageVisibilityService } from 'angular-page-visibility';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit, OnDestroy {
  private onPageUnloadedSubscription: Subscription;

  constructor(private angularPageVisibilityService: AngularPageVisibilityService) {}

  ngOnInit(): void {
    this.onPageUnloadedSubscription = this.angularPageVisibilityService.$onPageUnloaded.subscribe(() => {
      console.log( 'OnInit => unloaded' );
    });
  }

  ngOnDestroy(): void {
    this.onPageUnloadedSubscription.unsubscribe();
  }
}

```

## .$onPageVisibilityChange  : Observable<void>

Return Observable<void> to run if page visibility change.

Example:

```ts

import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularPageVisibilityService, AngularPageVisibilityStateEnum } from 'angular-page-visibility';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit, OnDestroy {
  private onPageVisibilityChangeSubscription: Subscription;

  constructor(private angularPageVisibilityService: AngularPageVisibilityService) {}

  ngOnInit(): void {
    this.onPageVisibilityChangeSubscription = this.angularPageVisibilityService
    .$onPageVisibilityChange.subscribe( ( visibilityState: AngularPageVisibilityStateEnum ) => {
      if ( visibilityState === AngularPageVisibilityStateEnum.VISIBLE ) {
        console.log( 'OnInit => visibilityChange => visible' );
      } else if (visibilityState === AngularPageVisibilityStateEnum.HIDDEN) {
        console.log( 'OnInit => visibilityChange => hidden' );
      } else if (visibilityState === AngularPageVisibilityStateEnum.PRERENDER) {
        console.log( 'OnInit => visibilityChange => prerender' );
      } else if (visibilityState === AngularPageVisibilityStateEnum.UNLOADED) {
        console.log( 'OnInit => visibilityChange => unloaded' );
      }
    } );
  }

  ngOnDestroy(): void {
    this.onPageVisibilityChangeSubscription.unsubscribe();
  }
}
 
```
