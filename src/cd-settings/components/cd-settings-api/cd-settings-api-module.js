'use strict';
import angular from 'angular';
import cdSettingsApiService from './cd-settings-api-service.js';
// import external db module

/**
 * @ngdoc overview
 * @name cdSettingsApi
 * @description
 * # cdSettingsApi
 *
 * Submodule for the cdSettings.
 */
export default angular.module('cdSettingsApi', [
  // external db module
])
.factory('cdSettingsApiService', cdSettingsApiService);