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
    get: (id) => {
      console.log('get was called with id ' + id);
      return { 
        name: 'designer page', 
        design: id 
      };
    }
  }
}

cdDesignerApiService.$inject = [];