'use strict';

/**
 * @ngdoc service
 * @name classTracApp.CompleteAssignment
 * @description
 * # CompleteAssignment
 * Factory in the classTracApp.
 */
 Parse.initialize("7v0Je2tjjrCEEK9ptZl0ol6NFTF7gOQybSJl0UqS", "hpSly2y7RIf6z9K3a7ahJjdqzFlK8UvWyHgI1NJC");

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
