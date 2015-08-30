'use strict';
import angular from 'angular';

import cdRouting from './components/cd-routing/cd-routing-module.js';
import cdSettings from './cd-settings/cd-settings-module.js';
import cdDesigner from './cd-designer/cd-designer-module.js';

/**
 * @ngdoc overview
 * @name cs-cd
 * @description
 * # checklist designer module
 */ 
export default angular.module('csCd', [
  cdRouting.name,
  cdSettings.name,
  cdDesigner.name
]);