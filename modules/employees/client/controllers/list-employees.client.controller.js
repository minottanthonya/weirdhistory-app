(function () {
  'use strict';

  angular
    .module('employees')
    .controller('EmployeesListController', EmployeesListController);

  EmployeesListController.$inject = ['EmployeesService', "$window"];

  function EmployeesListController(EmployeesService, $window) {
    var vm = this;
    vm.user = $window.user;
    vm.employees = EmployeesService.query();
  }
}());
