'use strict';

/**
 * @ngdoc function
 * @name cdSettingsEditPage.controller:CdSettingsEditPageController
 * @description
 * # CdSettingsEditPageController
 * Controller of the cdSettingsEditPage
 */

export default class CdSettingsEditPageController {

  constructor($log, $q, api, settings) {
    Object.assign(this, {$log, $q, api, settings});
    $log.warn('its just temporary stuff');
    console.log(settings);
  }

  normalizeData(settings) {
  }

  save(form) {
    if (form.$invalid) {
      return this.$q.reject({});
    }

    this.promises.save = this.api.save(this.settings).then(
      (data) => this.settings = this.normalizeData(data),
      (error) => this.$q.reject(error)
    );
  }
}

CdSettingsEditPageController.$inject = ['$log', '$q', 'cdSettingsApiService', 'settings'];