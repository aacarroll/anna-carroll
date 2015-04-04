'use strict';

/**
 * @ngdoc service
 * @name classTracApp.Login
 * @description
 * # Login
 * Factory in the classTracApp.
 */
angular.module('classTracApp')
  .factory('Login', function ($resource) {
    return $resource('http://private-82fb7-carrolla5.apiary-mock.com/users/login');
    // Service logic
    // ...

    //var meaningOfLife = 42;

    // Public API here
    
  });
