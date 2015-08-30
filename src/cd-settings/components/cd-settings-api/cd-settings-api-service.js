'use strict';

/**
 * @ngdoc factory
 * @name cdSettings.cdSettingsApiService
 * @description
 * # CdSettingsApiService
 * Service in the cdSettings.
 */
export default function cdSettingsApiService() {
  console.log('service injected');
  return {
    get: () => ({ name: 'settings', userCount: 12, emails: true })
  }
}

cdSettingsApiService.$inject = [];