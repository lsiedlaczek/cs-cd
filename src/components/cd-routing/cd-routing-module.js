'use strict';
import angular from 'angular';

/**
 * @ngdoc overview
 * @name cdRouting
 * @description
 * # cdRouting
 *
 * Submodule for the cdApp.
 */
export default angular
  .module('cdRouting', [
    'ui.router'
  ])
  .config(baseRoutingConfig)
  .config(settingsRoutingConfig)
  .config(designerRoutingConfig);
  
/**
 * Base routing for designer
 *
 * @param {Object} $stateProvider
 */
function baseRoutingConfig($stateProvider) {
  $stateProvider.state('cd', {
    url: '/cd',
    template: '<div ui-view></div>',
    abstract: true
  });
}

baseRoutingConfig.$inject = ['$stateProvider'];

function settingsRoutingConfig($stateProvider) {
  $stateProvider.state('cd.settings', {
    url: '/settings',
    template: '<div ui-view></div>',
    abstract: true
  });
}

settingsRoutingConfig.$inject = ['$stateProvider'];

function designerRoutingConfig($stateProvider) {
  $stateProvider.state('cd.designer', {
    url: '/designer',
    template: '<div ui-view></div>',
    abstract: true
  });
}

designerRoutingConfig.$inject = ['$stateProvider'];