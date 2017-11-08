<a name="4.0.8"></a>
# [4.0.8] (2017-11-08)

### Features
* **service/page.visibility.service:** Evolve observable $onPageVisibilityChange :

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
* **service/page.visibility.service:** Add 1 observable : $onPageVisibilityChange 

<a name="4.0.6"></a>
# [4.0.6] (2017-11-03)

### Features
* **service/page.visibility.service:** Add 2 methods : isPageVisible, isPageNotVisible. Add 2 obervables : $onPageVisible, $onPageNotVisible 
