'use strict';

// fact module config
angular.module('fact').run(['Menus',
  function (Menus) {
	// config logic
	Menus.addMenuItem('topbar', {
		title:'History Facts',
		state:'facts',
		roles:['*']
	  });
  }
]);