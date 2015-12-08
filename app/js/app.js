(function(){

	angular.module("directorio", ["ngRoute", "directorio.controllers"])
	 	.config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider){
	 		$routeProvider
	 			.when("/contactos", {
		 			templateUrl: "./view/contactos.html",
		 			controller: "ContactoController"
		 		})
		 		.when("/contactos/:id", {
		 			templateUrl: "./partials/contacto-edit.html",
		 			controller: "ContactoController"
		 		})
		 		.when("/contactos/add", {
		 			templateUrl: "./partials/contacto-add.html",
		 			controller: "ContactoController"
		 		})
		 		.otherwise({
					redirectTo: '/contactos'
				});
	 	}]);

})()