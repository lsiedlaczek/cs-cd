'use strict';

/**
 * @ngdoc function
 * @name cdDesignerEditPage.controller:CdDesignerEditPageController
 * @description
 * # CdDesignerEditPageController
 * Controller of the cdDesignerEditPage
 */

export default class CdDesignerEditPageController {

  constructor($log, $q, api, designer) {
    Object.assign(this, {$log, $q, api, designer});
    console.log('designer edit page');
  }

  normalizeData(designer) {
  }

  save(form) {
    if (form.$invalid) {
      return this.$q.reject({});
    }

    this.promises.save = this.api.save(this.designer).then(
      (data) => this.designer = this.normalizeData(data),
      (error) => this.$q.reject(error)
    );
  }
}

CdDesignerEditPageController.$inject = ['$log', '$q', 'cdDesignerApiService', 'designer'];