'use strict';
import angular from 'angular';

import cdDesignerEditPage from './components/cd-designer-edit-page/cd-designer-edit-page-module.js';
import cdDesignerListPage from './components/cd-designer-list-page/cd-designer-list-page-module.js';
import cdDesignerRouting from './components/cd-designer-routing/cd-designer-routing-module.js';
import cdDesignerApi from './components/cd-designer-api/cd-designer-api-module.js';

/**
 * @ngdoc overview
 * @name cdDesigner
 * @description
 * # cdDesigner
 *
 * Submodule for the cdDesigner.
 */
export default angular.module('cdDesigner', [
  cdDesignerRouting.name,
  cdDesignerApi.name,
  cdDesignerEditPage.name,
  cdDesignerListPage.name
]);