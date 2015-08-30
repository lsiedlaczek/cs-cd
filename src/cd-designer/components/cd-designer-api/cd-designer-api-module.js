'use strict';
import angular from 'angular';
import cdDesignerApiService from './cd-designer-api-service.js';
// import external db module

/**
 * @ngdoc overview
 * @name cdDesignerApi
 * @description
 * # cdDesignerApi
 *
 * Submodule for the cdDesigner.
 */
export default angular.module('cdDesignerApi', [
  // external db module
])
.factory('cdDesignerApiService', cdDesignerApiService);