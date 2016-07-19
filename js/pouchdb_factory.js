(function(){
	'use strict'

	angular.module('app')
	.factory('pouchDB', pouchDB);


	function pouchDB($rootScope) {

		var database;
		var changeListener;

		return {

			setDataBase: function(databaseName) {
				return database = new PouchDB(databaseName);
			},

			save: function(data) {
				return database.post(data).then(function(response){
					console.log(response);
				});
			},

			get: function() {
				return database.allDocs({include_docs: true, attachments: true});
			}
		}
	}
})()

