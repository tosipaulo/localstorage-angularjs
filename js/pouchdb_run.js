(function(){
	'use sctric'
	angular.module('app')
	.run(run);

	function run(pouchDB) {
		pouchDB.setDataBase('nomes');
	}
})()