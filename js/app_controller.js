(function(){
	'use strict'
	
	angular.module('app')
	.controller('indexController', indexController);


	function indexController($scope, $localStorage, listLocalStorage, pouchDB) {
		var vm = this;
		vm.nomes = [];
		vm._id = vm.nomes.length || -1;

	
		/*vm.saveData = function(data) {

			if($localStorage.message){
				obj = $localStorage.message;
				obj.push(data);
			}else {
				obj.push(data);
				$localStorage.message = obj;
			}

		}*/
		vm.saveData = function(data) {

			/*vm.id++;
			data.id = vm.id;
			if(listLocalStorage.get()){
				vm.nomes = listLocalStorage.get();

				vm.nomes.push(angular.copy(data));	
			}else {
				vm.nomes.push(angular.copy(data));	
			}

			listLocalStorage.post(vm.nomes);*/

			pouchDB.save(data);
			//$scope.main.pessoa = '';
			

		}

		vm.loadData = function() {
			pouchDB.get().then(function(response){

				response.rows.forEach(function(el){
					vm.nomes.push(el);
				})
			});
				
			console.log(vm.nomes);
			//vm.nomes = listLocalStorage.get() || vm.nomes; 
		}

		/*vm.editar = function(data) {
			//$scope.main.pessoa = angular.copy(data);
		}

		vm.deletar = function(id) {
			vm.nomes = vm.nomes.filter(function(element){ 
				return element.id !== id;
			})
			vm.id++;
			listLocalStorage.post(vm.nomes);
		}

		vm.atualizar = function(data) {
			var nome = vm.nomes.map(function(el, i){
				if(el.id === data.id) {
					return data
				}
				return el;
			});

			vm.nomes = angular.copy(nome);
			listLocalStorage.post(vm.nomes);
			$scope.main.pessoa = '';
		}*/


		vm.loadData();
		
	}


})()