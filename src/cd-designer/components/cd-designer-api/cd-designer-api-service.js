'use strict';

/**
 * @ngdoc factory
 * @name cdDesigner.cdDesignerApiService
 * @description
 * # CdDesignerApiService
 * Service in the cdDesigner.
 */
export default function cdDesignerApiService() {
  return {
    get: (id) => (
    	{ name: 'designer page' }
    );
  }
}

cdDesignerApiService.$inject = [];