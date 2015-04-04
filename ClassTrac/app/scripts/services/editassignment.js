'use strict';

/**
 * @ngdoc service
 * @name classTracApp.EditAssignment
 * @description
 * # EditAssignment
 * Factory in the classTracApp.
 */
angular.module('classTracApp')
  .factory('EditAssignment', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
