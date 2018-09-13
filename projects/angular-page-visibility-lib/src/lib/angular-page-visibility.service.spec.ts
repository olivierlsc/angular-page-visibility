import { TestBed, inject } from '@angular/core/testing';

import { AngularPageVisibilityService } from './angular-page-visibility.service';

describe('AngularPageVisibilityLibService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AngularPageVisibilityService]
    });
  });

  it('should be created', inject([AngularPageVisibilityService], (service: AngularPageVisibilityService) => {
    expect(service).toBeTruthy();
  }));
});
