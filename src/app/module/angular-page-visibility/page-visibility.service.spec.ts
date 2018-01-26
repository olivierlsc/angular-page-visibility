import { TestBed, inject } from '@angular/core/testing';
import { PageVisibilityService } from './page-visibility.service';
declare let beforeEach:any;
declare let describe:any;
declare let expect:any;
declare let it:any;

describe ( 'PageVisibilityService' , () => {
  beforeEach ( () => {
    TestBed.configureTestingModule( {
      providers : [ PageVisibilityService ]
    } );
  } );

  it ( 'should be created' , inject ( [ PageVisibilityService ] , ( service : PageVisibilityService ) => {
    expect ( service ).toBeTruthy();
  } ) );
} );
