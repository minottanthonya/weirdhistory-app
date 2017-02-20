(function () {
  'use strict';

  angular
    .module('volunteers')
    .controller('VolunteersListController', VolunteersListController);

  VolunteersListController.$inject = ['VolunteersService', "$window"];

  function VolunteersListController(VolunteersService, $window) {
    var vm = this;
    vm.user = $window.user;
    vm.volunteers = VolunteersService.query();
  }
}());
