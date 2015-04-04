'use strict';

/**
 * @ngdoc service
 * @name classTracApp.AddAssignment
 * @description
 * # AddAssignment
 * Factory in the classTracApp.
 */
angular.module('classTracApp')
  .factory('AddAssignment', function () {
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
