'use strict';
import angular from 'angular';

import cdSettingsEditPage from './components/cd-settings-edit-page/cd-settings-edit-page-module.js';
import cdSettingsRouting from './components/cd-settings-routing/cd-settings-routing-module.js';
import cdSettingsApi from './components/cd-settings-api/cd-settings-api-module.js';

/**
 * @ngdoc overview
 * @name cdSettings
 * @description
 * # cdSettings
 *
 * Submodule for the cdSettings.
 */
export default angular.module('cdSettings', [
  cdSettingsRouting.name,
  cdSettingsApi.name,
  cdSettingsEditPage.name
]);