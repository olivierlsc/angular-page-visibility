import { AngularPageVisibilityService } from './angular-page-visibility.service';

describe('AngularPageVisibilityLibService', () => {
  let angularPageVisibilityService: AngularPageVisibilityService;
  const document: any = {};
  describe('isPageVisible', () => {
    it('should be return true when page is visible', () => {
      document['hidden'] = false;
      angularPageVisibilityService = new AngularPageVisibilityService(document);

      expect(angularPageVisibilityService.isPageVisible()).toBeTruthy();
    });

    it('should be return false when page is not visible', () => {
      document['hidden'] = true;
      angularPageVisibilityService = new AngularPageVisibilityService(document);

      expect(angularPageVisibilityService.isPageVisible()).toBeFalsy();
    });
  });

  describe('isPageHidden', () => {
    it('should be return true when page is not visible', () => {
      document['hidden'] = true;
      angularPageVisibilityService = new AngularPageVisibilityService(document);

      expect(angularPageVisibilityService.isPageHidden()).toBeTruthy();
    });

    it('should be return true when page is not visible', () => {
      document['hidden'] = false;
      angularPageVisibilityService = new AngularPageVisibilityService(document);

      expect(angularPageVisibilityService.isPageHidden()).toBeFalsy();
    });
  });

  describe('isPagePrerender', () => {
    it('should be return true when visibility state is "prerender"', () => {
      document['visibilityState'] = 'prerender';
      angularPageVisibilityService = new AngularPageVisibilityService(document);

      expect(angularPageVisibilityService.isPagePrerender()).toBeTruthy();
    });

    it('should be return false when visibility state is not "prerender"', () => {
      document['visibilityState'] = 'visible';
      angularPageVisibilityService = new AngularPageVisibilityService(document);

      expect(angularPageVisibilityService.isPagePrerender()).toBeFalsy();
    });
  });

  describe('isPageUnloaded', () => {
    it('should be return true when visibility state is "unloaded"', () => {
      document['visibilityState'] = 'unloaded';
      angularPageVisibilityService = new AngularPageVisibilityService(document);

      expect(angularPageVisibilityService.isPageUnloaded()).toBeTruthy();
    });

    it('should be return false when visibility state is not "unloaded"', () => {
      document['visibilityState'] = 'visible';
      angularPageVisibilityService = new AngularPageVisibilityService(document);

      expect(angularPageVisibilityService.isPageUnloaded()).toBeFalsy();
    });
  });
});
