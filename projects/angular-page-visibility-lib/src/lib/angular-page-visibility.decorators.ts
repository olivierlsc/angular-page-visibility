import {AngularPageVisibilityModule} from './angular-page-visibility.module';
import { ReflectiveInjector, Provider } from '@angular/core';
import { AngularPageVisibilityService } from './angular-page-visibility.service';

const providers : Provider[] = [ AngularPageVisibilityService ];
const injector = ReflectiveInjector.resolveAndCreate( providers );
const pageVisibilityService = injector.get( AngularPageVisibilityService );

export function OnPageVisibilityChange () : MethodDecorator {
  return function ( target : any , propertyKey : string , descriptor : PropertyDescriptor ) {
    const fn = descriptor.value;
    pageVisibilityService.$onPageVisibilityChange.subscribe( ( isPageVisible : boolean )=> {
      fn.call(target, [ isPageVisible ]);
    } );
  };
}

export function OnPageHidden () : MethodDecorator {
  return function ( target : any , propertyKey : string , descriptor : PropertyDescriptor ) {
    const fn = descriptor.value;
    pageVisibilityService.$onPageHidden.subscribe( ()=> {
      fn.call(target);
    } );
  };
}

export function OnPageVisible () : MethodDecorator {
  return function ( target : any , propertyKey : string , descriptor : PropertyDescriptor ) {
    const fn = descriptor.value;
    pageVisibilityService.$onPageVisible.subscribe( ()=> {
      fn.call(target);
    } );
  };
}
