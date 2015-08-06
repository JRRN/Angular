'use strict';

/**
 * @ngdoc overview
 * @name proApp
 * @description
 * # proApp
 *
 * Main module of the application.
 */
angular
  .module('proApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'LocalStorageModule'
  ])
  .config(['localStorageServiceProvider',function(localStorageServiceProvider){
    localStorageServiceProvider.setPrefix('ls');
  }])

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
        controllerAs: 'main'
      })
      .when('/temas', {
        templateUrl: 'views/temas.html',
        controller: 'PreguntasCtrl',
        controllerAs: 'main'
      })
      .when('/preguntas', {
        templateUrl: 'views/preguntas.html',
        controller: 'PreguntasCtrl',
        controllerAs: 'main'
      })
      .when('/db', {
        templateUrl: 'views/db.html',
        controller: 'DbCtrl',
        controllerAs: 'main'
      })
      .when('/preguntas/tema', {
        templateUrl: 'views/list_preguntas.html',
        controller: 'lPregCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
