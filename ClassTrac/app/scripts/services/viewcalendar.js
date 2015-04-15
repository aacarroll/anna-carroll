'use strict';

/**
 * @ngdoc service
 * @name classTracApp.ViewCalendar
 * @description
 * # ViewCalendar
 * Factory in the classTracApp.
 */
 Parse.initialize("7v0Je2tjjrCEEK9ptZl0ol6NFTF7gOQybSJl0UqS", "hpSly2y7RIf6z9K3a7ahJjdqzFlK8UvWyHgI1NJC");

angular.module('classTracApp')
  .factory('ViewCalendar', function ($resource) {
  	var Classes=Parse.object.extend("Class");
  	var Class=new Classes();
  	var query=new Parse.Query(Classes);
  	var item = document.getElementById('classList');
  	query.get("ulW3bjCHjq", {
  		success: function (Class) {
  			classList.innerHTML="<li> {{Class}} </li>"

  		}
  		error: function(Class, error) {
  			classList.innerHTML="Error listing assignments";
  		}

  	}
    //return $resource('http://private-82fb7-carrolla5.apiary-mock.com/assignments/:id');
       

  });
