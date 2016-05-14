'use strict';
var fyle = angular
  .module('deploymapApp', [
    'ngCookies',
    'ngResource',
    'ui.router',
  ]);

  fyle.config(function($stateProvider, $urlRouterProvider) {

  	$urlRouterProvider.otherwise('/bank');

  	$stateProvider
  	.state('about', {
            url: '/bank',
            templateUrl: '../views/about.html',
            controller:'aboutCTRL'
            
        });

  });
    
