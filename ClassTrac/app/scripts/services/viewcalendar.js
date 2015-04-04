'use strict';

/**
 * @ngdoc service
 * @name classTracApp.ViewCalendar
 * @description
 * # ViewCalendar
 * Factory in the classTracApp.
 */
angular.module('classTracApp')
  .factory('ViewCalendar', function ($resource) {
    return $resource('http://private-82fb7-carrolla5.apiary-mock.com/assignments/:id');
       

  });
