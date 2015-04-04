'use strict';

/**
 * @ngdoc service
 * @name classTracApp.CompleteAssignment
 * @description
 * # CompleteAssignment
 * Factory in the classTracApp.
 */
angular.module('classTracApp')
  .factory('CompleteAssignment', function () {
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
