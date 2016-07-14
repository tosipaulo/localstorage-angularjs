(function(){
	'use strict'

	angular.module('app')
	.factory('listLocalStorage', listLocalStorage);


	function listLocalStorage($http, $localStorage) {
		return {

			post: function(data) {
				return $localStorage.list = data;
			},

			get: function() {
				return $localStorage.list;
			}


		}
	}
})()

