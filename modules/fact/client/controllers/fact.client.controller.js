(function() {
  'use strict';

  angular
    .module('fact')
    .controller('FactController', FactController);

  FactController.$inject = ['$scope'];

  function FactController($scope) {
    var vm = this;

    // Fact controller logic
    // ...

    init();

    function init() {
    }
  }
})();
