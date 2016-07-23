(function(){
	'use strict'
	angular.module('app')
	.config(config);

	function config($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('list', {
				'url': '/list',
				'templateUrl': 'views/list.html',
				'controller': 'indexController as main'
			})
			.state('item', {
				'url': '/item/:documentId/:documentRevision',
				'templateUrl': 'views/item.html',
				'controller': 'indexController as main'
			});

			$urlRouterProvider.otherwise('list');
	}
})()