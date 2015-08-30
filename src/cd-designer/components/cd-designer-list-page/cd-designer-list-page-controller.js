'use strict';

/**
 * @ngdoc function
 * @name cdDesignerListPage.controller:CdDesignerListPageController
 * @description
 * # CdDesignerListPageController
 * Controller of the cdDesignerListPage
 */

export default class CdDesignerListPageController {

  constructor($log, $q, api, designer) {
    Object.assign(this, {$log, $q, api, designer});
    console.log('designer list page', designer);
  }

  normalizeData(designer) {
  }

}

CdDesignerListPageController.$inject = ['$log', '$q', 'cdDesignerApiService', 'designer'];