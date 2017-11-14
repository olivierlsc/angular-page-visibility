import {PageVisibilityService} from '../page-visibility.service';
import {AngularPageVisibilityModule} from '../angular-page-visibility.module';
import { ReflectiveInjector, Provider } from '@angular/core';
export function OnPageNotVisible(): MethodDecorator {
    return function ( target: any, propertyKey: string, descriptor: PropertyDescriptor ) {
        let providers: Provider[] = [ PageVisibilityService ];
        const injector = ReflectiveInjector.resolveAndCreate( providers );
        const pageVisibilityService = injector.get( PageVisibilityService );
        pageVisibilityService.$onPageNotVisible.subscribe( ()=> {
            target[ propertyKey ].apply( this );
        } );
    };
}