<a name="6.1.3"></a>
# [6.1.3] (2018-09-27)

## Bug fixes

* Fix undefined in decorators

<a name="6.1.2"></a>
# [6.1.2] (2018-09-27)

## Bug fixes

* [**#7 Decorators doesnt work with Injectables**](https://github.com/olivierlsc/angular-page-visibility/issues/7)

<a name="6.1.1"></a>
# [6.1.1] (2018-09-14)

## Features

* [**New decorator @OnPagePrerender**](./wiki/on-page-prerender.decorator.md)
* [**New decorator @OnPageUnloaded**](./wiki/on-page-unloaded.decorator.md)
* [**New service angularPageVisibilityService.isPagePrerender**](./wiki/page-visibility.service.md)
* [**New service angularPageVisibilityService.isPageUnloaded**](./wiki/page-visibility.service.md)
* [**Get visibility status in service angularPageVisibilityService.$onPageVisibilityChange**](./wiki/page-visibility.service.md)
* [**Get visibility status with @OnPageVisibilityChange**](./wiki/on-page-visibility-change.decorator.md)
* [**Expose AngularPageVisibilityStateEnum contains all visibility status**](./wiki/angular-page-vsibility-state.enum.md)

<a name="6.0.2"></a>
# [6.0.2] (2018-08-23)

## Bug fixes

* **dependencies**

<a name="6.0.1"></a>
# [6.0.1] (2018-08-23)

## Bug fixes

* [**#6 Build error with aot support**](https://github.com/olivierlsc/angular-page-visibility/issues/6)

<a name="6.0.0"></a>
# [6.0.0] (2018-08-23)

## Bug fixes

* [**#5 Angular 6 Compatibility**](https://github.com/olivierlsc/angular-page-visibility/issues/5)

<a name="4.0.13"></a>
# [4.0.13] (2018-08-23)

## Bug fixes

* [**#4 @OnPageVisible() doesnt work with class instances**](https://github.com/olivierlsc/angular-page-visibility/issues/4)

<a name="4.0.11"></a>
# [4.0.11] (2018-01-26)

Use ng-packagr for package this angular module.

<a name="4.0.9"></a>
# [4.0.9] (2017-11-14)

### Features
* **Add decorators to use in components :**

Example:

```
@OnPageVisible()
logWhenPageVisible(): void {
    console.log( 'OnPageVisible' );
    console.log( 'visible' );
}

@OnPageHidden()
logWhenPageNotVisible(): void {
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
```

### Deprecated
* **$onPageNotVisible is deprecated, use $onPageHidden: Observable<void> in PageVisibilityService:**
  
Example:

Before:
```
this.onPageNotVisibleSubscription = this.pageVisibilityService.$onPageNotVisible.subscribe( ()=> {
    console.log( 'notVisible' );
} );

```

After:
```
this.onPageHiddenSubscription = this.pageVisibilityService.$onPageHidden.subscribe( ()=> {
    console.log( 'hidden' );
} );
```
* **isPageNotVisible is deprecated, use isPageHidden: void in PageVisibilityService:**

Example:

Before:
```
if ( this.pageVisibilityService.isPageNotVisible() ) {
    console.log( 'notVisible' );
}

```

After:
```
if ( this.pageVisibilityService.isPageHidden() ) {
    console.log( 'hidden' );
}
```
  
<a name="4.0.8"></a>
# [4.0.8] (2017-11-08)

### Features
* **PageVisibilityService:** Evolve observable $onPageVisibilityChange :

Example:

Before:
```
this.pageVisibilityService.$onPageVisibilityChange.subscribe( () => {
    console.log( 'visibilityChange' );
} );

```

After:
```
this.pageVisibilityService.$onPageVisibilityChange.subscribe( ( isPageVisible: boolean ) => {
    console.log( 'visibilityChange' );
    if ( isPageVisible ) {
        console.log( 'visible' );
    } else {
        console.log( 'notVisible' );
    }
} );
```

<a name="4.0.7"></a>
# [4.0.7] (2017-11-07)

### Features
* **PageVisibilityService:** Add 1 observable : $onPageVisibilityChange 

<a name="4.0.6"></a>
# [4.0.6] (2017-11-03)

### Features
* **PageVisibilityService:** Add 2 methods : isPageVisible, isPageNotVisible. Add 2 obervables : $onPageVisible, $onPageNotVisible 
