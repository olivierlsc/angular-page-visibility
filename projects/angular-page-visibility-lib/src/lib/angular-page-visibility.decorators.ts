import { Provider, ReflectiveInjector } from '@angular/core';
import { AngularPageVisibilityService } from './angular-page-visibility.service';
import { AngularPageVisibilityStateEnum } from './angular-page-visibility.state.enum';

const providers: Provider[] = [ AngularPageVisibilityService ];
const injector = ReflectiveInjector.resolveAndCreate( providers );
const pageVisibilityService = injector.get( AngularPageVisibilityService );

export function OnPageVisibilityChange (): MethodDecorator {
  return function ( target: any , propertyKey: string , descriptor: PropertyDescriptor ) {
    const fn = descriptor.value;
    pageVisibilityService.$onPageVisibilityChange.subscribe( ( visibilityState: AngularPageVisibilityStateEnum ) => {
      fn.call(target, [ visibilityState ]);
    } );
  };
}

export function OnPageHidden (): MethodDecorator {
  return function ( target: any , propertyKey: string , descriptor: PropertyDescriptor ) {
    const fn = descriptor.value;
    pageVisibilityService.$onPageHidden.subscribe( () => {
      fn.call(target);
    } );
  };
}

export function OnPageVisible (): MethodDecorator {
  return function ( target: any , propertyKey: string , descriptor: PropertyDescriptor ) {
    const fn = descriptor.value;
    pageVisibilityService.$onPageVisible.subscribe( () => {
      fn.call(target);
    } );
  };
}

export function OnPagePrerender (): MethodDecorator {
  return function ( target: any , propertyKey: string , descriptor: PropertyDescriptor ) {
    const fn = descriptor.value;
    pageVisibilityService.$onPagePrerender.subscribe( () => {
      fn.call(target);
    } );
  };
}

export function OnPageUnloaded (): MethodDecorator {
  return function ( target: any , propertyKey: string , descriptor: PropertyDescriptor ) {
    const fn = descriptor.value;
    pageVisibilityService.$onPageUnloaded.subscribe( () => {
      fn.call(target);
    } );
  };
}
