  'use strict';

/**
 * @ngdoc overview
 * @name classTracApp
 * @description
 * # classTracApp
 *
 * Main module of the application.
 */
angular
  .module('classTracApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/ViewCalendar', {
        templateUrl: 'views/viewcalendar.html',
        controller: 'ViewcalendarCtrl'
      })
      .when('/AddAssignment', {
        templateUrl: 'views/addassignment.html',
        controller: 'AddassignmentCtrl'
      })
      .when('/EditAssignment', {
        templateUrl: 'views/editassignment.html',
        controller: 'EditassignmentCtrl'
      })
      .when('/CompleteAssignment', {
        templateUrl: 'views/completeassignment.html',
        controller: 'CompleteassignmentCtrl'
      })
      .when('/Login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
