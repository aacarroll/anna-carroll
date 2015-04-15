'use strict';

/**
 * @ngdoc service
 * @name classTracApp.AddAssignment
 * @description
 * # AddAssignment
 * Factory in the classTracApp.
 */
 Parse.initialize("7v0Je2tjjrCEEK9ptZl0ol6NFTF7gOQybSJl0UqS", "hpSly2y7RIf6z9K3a7ahJjdqzFlK8UvWyHgI1NJC");

angular.module('classTracApp')
  .factory('AddAssignment', function () {
    // Service logic
    // ...

    var Assignment= Parse.object.extend("Assignment");
    var assignment = new Assignment();

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
