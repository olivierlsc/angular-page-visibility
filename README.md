# Angular Page Visibility

## Getting started
First, install it.

```bash
npm install angular-page-visibility --save
```

Then, import it into your `@NgModule`:

```bash
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularPageVisibilityModule } from 'angular-page-visibility';
import { AppComponent } from './app.component';

@NgModule( {
    declarations : [
        AppComponent
    ],
    imports : [
        BrowserModule,
        AngularPageVisibilityModule
    ],
    providers : [],
    bootstrap : [ AppComponent ]
} )
export class AppModule {
}
```

Then, use it in your component :

```bash
import { Component, OnDestroy, Inject, OnInit } from '@angular/core';
import { OnPageVisible, OnPageHidden, OnPageVisibilityChange } from "angular-page-visibility";

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

    @OnPageHidden()
    logWhenPageHidden(): void {
        console.log( 'OnPageHidden' );
        console.log( 'hidden' );
    }

    @OnPageVisibilityChange()
    logWhenPageVisibilityChange( isPageVisible: boolean ): void {
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

## Features and API

- [@OnPageVisible](./wiki/on-page-visible.decorator.md)
- [@OnPageHidden](./wiki/on-page-hidden.decorator.md)
- [@OnPageVisibilityChange](./wiki/on-page-visibility-change.decorator.md)
- [PageVisibilityService](./wiki/page-visibility.service.md)

## For any questions, suggestions, or feature requests
[Please file an issue](https://github.com/olivierlsc/angular-page-visibility/issues)!

## License

License under the MIT License (MIT)

Copyright © 2017-2018 [Olivier LIN-SI-CHENG](http://www.olivierlinsicheng.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. 

IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
