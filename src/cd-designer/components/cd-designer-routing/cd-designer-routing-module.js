'use strict';
import angular from 'angular';
import cdDesignerApi from 'cd/cd-designer/components/cd-designer-api/cd-designer-api-module.js';

/**
 * @ngdoc overview
 * @name cdDesignerRouting
 * @description
 * # cdDesignerRouting
 *
 * Submodule for the cdApp.
 */
export default angular
  .module('cdDesignerRouting', [
    'ui.router',
    cdDesignerApi.name
  ])

  .constant('cdDesigner', {
    path: 'cd/cd-designer/components'
  })
  .config(designerEditRoutingConfig)
  
/**
 *
 * @param $stateProvider
 */
function designerEditRoutingConfig($stateProvider, cdDesigner) {
  $stateProvider.state('cd.designer', {
    url: '/designer',
    inSidemenu: false,
    templateUrl: cdDesigner.path + '/cd-designer-edit-page/cd-designer-edit-page.html',
    controller: 'CdDesignerEditPageController as designerCtrl',
    resolve: {
      designer: ['cdDesignerApiService', (api) => api.get()]
    }
  });
}

designerEditRoutingConfig.$inject = ['$stateProvider', 'cdDesigner'];
