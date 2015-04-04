'use strict';

/**
 * @ngdoc function
 * @name classTracApp.controller:ViewcalendarCtrl
 * @description
 * # ViewcalendarCtrl
 * Controller of the classTracApp
 */
angular.module('classTracApp')
  .controller('ViewcalendarCtrl', function ($scope, assignment) {
    assignment.query(function(data) {
        $scope.assignments = data;  
    });
  

  });
