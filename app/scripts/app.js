'use strict';

/**
 * @ngdoc overview
 * @name detanglerAngularApp
 * @description
 * # detanglerAngularApp
 *
 * Main module of the application.
 */
angular
  .module('detanglerAngularApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
