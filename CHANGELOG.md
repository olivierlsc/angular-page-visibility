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
