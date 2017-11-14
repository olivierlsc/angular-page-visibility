import {PageVisibilityService} from '../page-visibility.service';
import {AngularPageVisibilityModule} from '../angular-page-visibility.module';
import { ReflectiveInjector, Provider } from '@angular/core';
export function OnPageVisibilityChange(): MethodDecorator {
    return function ( target: any, propertyKey: string, descriptor: PropertyDescriptor ) {
        let providers: Provider[] = [ PageVisibilityService ];
        const injector = ReflectiveInjector.resolveAndCreate( providers );
        const pageVisibilityService = injector.get( PageVisibilityService );
        pageVisibilityService.$onPageVisibilityChange.subscribe( ( isPageVisible: boolean )=> {
            target[ propertyKey ].apply( this, [ isPageVisible ] );
        } );
    };
}