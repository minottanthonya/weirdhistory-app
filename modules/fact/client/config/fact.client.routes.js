(function () {
  'use strict';

  //Setting up route
  angular
    .module('fact')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider'];

  function routeConfig($stateProvider) {
    // Fact state routing
    $stateProvider
      .state('fact-list', {
        url: '/fact',
        templateUrl: 'modules/fact/client/views/fact-list.client.view.html',
        controller: 'FactsController',
        controllerAs: 'vm'
      });
  }
})();
