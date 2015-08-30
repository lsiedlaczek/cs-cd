'use strict';
import angular from 'angular';
import cdDesignerApi from 'cs-cd/cd-designer/components/cd-designer-api/cd-designer-api-module.js';

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
    path: 'cd-designer/components'
  })
  .config(designerListRoutingConfig)
  .config(designerEditRoutingConfig);
  
/**
 *
 * @param $stateProvider
 */
function designerListRoutingConfig($stateProvider, cdDesigner) {
  $stateProvider.state('cd.designer.list', {
    url: '',
    templateUrl: cdDesigner.path + '/cd-designer-list-page/cd-designer-list-page.html',
    controller: 'CdDesignerListPageController as designerCtrl',
    resolve: {
      designer: ['cdDesignerApiService', (api) => api.get()]
    }
  });
}

designerListRoutingConfig.$inject = ['$stateProvider', 'cdDesigner'];

/**
 *
 * @param $stateProvider
 */
function designerEditRoutingConfig($stateProvider, cdDesigner) {
  $stateProvider.state('cd.designer.edit', {
    url: '/:id/edit',
    templateUrl: cdDesigner.path + '/cd-designer-edit-page/cd-designer-edit-page.html',
    controller: 'CdDesignerEditPageController as designerCtrl',
    resolve: {
      designer: ['cdDesignerApiService', '$stateParams', (api, $stateParams) => {
        console.log('here we go');
        console.log($stateParams.id);
        return api.get($stateParams.id);
        //return api.get($stateParams.id);
      }]
    }
  });
}

designerEditRoutingConfig.$inject = ['$stateProvider', 'cdDesigner'];
