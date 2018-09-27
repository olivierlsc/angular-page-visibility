import { Provider, ReflectiveInjector } from '@angular/core';
import { AngularPageVisibilityService } from './angular-page-visibility.service';
import { AngularPageVisibilityStateEnum } from './angular-page-visibility.state.enum';
import { Subscription } from 'rxjs';

const providers: Provider[] = [ AngularPageVisibilityService ];
const injector = ReflectiveInjector.resolveAndCreate( providers );
const pageVisibilityService = injector.get( AngularPageVisibilityService );

export function OnPageVisibilityChange (): MethodDecorator {
  return function ( target: any , propertyKey: string , descriptor: PropertyDescriptor ) {
    const originalMethod = descriptor.value;
    const originalNgOnInit = target.ngOnInit;
    let onPageHiddenSubscription: Subscription;
    target.ngOnInit = function(...args) {
      onPageHiddenSubscription = pageVisibilityService.$onPageVisibilityChange
      .subscribe( ( visibilityState: AngularPageVisibilityStateEnum ) => originalMethod.call(this, [ visibilityState ]));
      if (originalNgOnInit) {
        originalNgOnInit.call(this, args);
      }
    };
    const originalNgOnDestroy = target.ngOnDestroy;
    target.ngOnDestroy = function(...args) {
      onPageHiddenSubscription.unsubscribe();
      if (originalNgOnDestroy) {
        originalNgOnDestroy.call(this, args);
      }
    };
  };
}

export function OnPageHidden (): MethodDecorator {
  return function ( target: any , propertyKey: string , descriptor: PropertyDescriptor ) {
    const originalMethod = descriptor.value;
    const originalNgOnInit = target.ngOnInit;
    let onPageHiddenSubscription: Subscription;
    target.ngOnInit = function(...args) {
      onPageHiddenSubscription = pageVisibilityService.$onPageHidden.subscribe(() => originalMethod.call(this));
      if (originalNgOnInit) {
        originalNgOnInit.call(this, args);
      }
    };
    const originalNgOnDestroy = target.ngOnDestroy;
    target.ngOnDestroy = function(...args) {
      onPageHiddenSubscription.unsubscribe();
      if (originalNgOnDestroy) {
        originalNgOnDestroy.call(this, args);
      }
    };
  };
}

export function OnPageVisible (): MethodDecorator {
  return function ( target: any , propertyKey: string , descriptor: PropertyDescriptor ) {
    const originalMethod = descriptor.value;
    const originalNgOnInit = target.ngOnInit;
    let onPageVisibleSubscription: Subscription;
    target.ngOnInit = function(...args) {
      onPageVisibleSubscription = pageVisibilityService.$onPageVisible.subscribe(() => originalMethod.call(this));
      if (originalNgOnInit) {
        originalNgOnInit.call(this, args);
      }
    };
    const originalNgOnDestroy = target.ngOnDestroy;
    target.ngOnDestroy = function(...args) {
      onPageVisibleSubscription.unsubscribe();
      if (originalNgOnDestroy) {
        originalNgOnDestroy.call(this, args);
      }
    };
  };
}

export function OnPagePrerender (): MethodDecorator {
  return function ( target: any , propertyKey: string , descriptor: PropertyDescriptor ) {
    const originalMethod = descriptor.value;
    const originalNgOnInit = target.ngOnInit;
    let onPagePrerenderSubscription: Subscription;
    target.ngOnInit = function(...args) {
      onPagePrerenderSubscription = pageVisibilityService.$onPagePrerender.subscribe(() => originalMethod.call(this));
      if (originalNgOnInit) {
        originalNgOnInit.call(this, args);
      }
    };
    const originalNgOnDestroy = target.ngOnDestroy;
    target.ngOnDestroy = function(...args) {
      onPagePrerenderSubscription.unsubscribe();
      if (originalNgOnDestroy) {
        originalNgOnDestroy.call(this, args);
      }
    };
  };
}

export function OnPageUnloaded (): MethodDecorator {
  return function ( target: any , propertyKey: string , descriptor: PropertyDescriptor ) {
    const originalMethod = descriptor.value;
    const originalNgOnInit = target.ngOnInit;
    let onPageUnloadedSubscription: Subscription;
    target.ngOnInit = function(...args) {
      onPageUnloadedSubscription = pageVisibilityService.$onPageUnloaded.subscribe(() => originalMethod.call(this));
      if (originalNgOnInit) {
        originalNgOnInit.call(this, args);
      }
    };
    const originalNgOnDestroy = target.ngOnDestroy;
    target.ngOnDestroy = function(...args) {
      onPageUnloadedSubscription.unsubscribe();
      if (originalNgOnDestroy) {
        originalNgOnDestroy.call(this, args);
      }
    };
  };
}
