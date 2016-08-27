(function(){ 
	'use strict'
	
	angular.module('app')
	.controller('indexController', indexController);


	function indexController($scope, $rootScope, $state, $stateParams, $pouchDB) {
		var vm = this;

		vm.items = {};

		$pouchDB.startListening();

		$rootScope.$on('$pouchDB:change', function(event, data){
			vm.items[data.doc._id] = data.doc;
			$scope.$apply();
		});

		$rootScope.$on('$pouchDB:delete', function(event, data){
			delete vm.items[data.doc._id];
			$scope.$apply();
		});

		if($stateParams.documentId) {
			$pouchDB.get($stateParams.documentId).then(function(response) {
				$scope.inputForm = response;
			});
		}

		vm.save = function(firstname, lastname, email) {
			var jsonObject = {
				'firstname': firstname,
				'lastname': lastname,
				'email': email
			}

			console.log($stateParams);

			if($stateParams.documentId) {
				jsonObject["_id"] = $stateParams.documentId;
				jsonObject["_rev"] = $stateParams.documentRevision;
			}

			$pouchDB.save(jsonObject).then(function(response){
				$state.go('list');
			}, function(err){
				console.log('ERROR => ' + JSON.stringify(err));
			});
		}

		vm.delete = function(id, rev) {
			$pouchDB.delete(id, rev);
		}


	}


})()