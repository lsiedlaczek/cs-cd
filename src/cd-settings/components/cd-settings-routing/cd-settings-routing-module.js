'use strict';
import angular from 'angular';
import cdSettingsApi from 'app/cd-settings/components/cd-settings-api/cd-settings-api-module.js';

/**
 * @ngdoc overview
 * @name cdSettingsRouting
 * @description
 * # cdSettingsRouting
 *
 * Submodule for the cdApp.
 */
export default angular
  .module('cdSettingsRouting', [
    'ui.router',
    cdSettingsApi.name
  ])

  .constant('cdSettings', {
    path: 'app/cd-settings/components'
  })
  .config(settingsEditRoutingConfig)
  
/**
 *
 * @param $stateProvider
 */
function settingsEditRoutingConfig($stateProvider, cdSettings) {
  $stateProvider.state('cd.settings', {
    url: '/settings',
    inSidemenu: false,
    templateUrl: cdSettings.path + '/cd-settings-edit-page/cd-settings-edit-page.html',
    controller: 'CdSettingsEditPageController as settingsCtrl',
    resolve: {
      settings: ['cdSettingsApiService', (api) => api.get()]
    }
  });
}

settingsEditRoutingConfig.$inject = ['$stateProvider', 'cdSettings'];
