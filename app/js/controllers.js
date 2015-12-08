(function(){

	angular.module("directorio.controllers", [])
		.controller("ContactoController", ["$scope", "$routeParams", function ($scope, $routeParams){
			//console.log($routeParams.id)
			$scope.contactos = [
									{
										"id": 1,
										"nombre": "Juan Mori Mores",
										"telefono": "(01) 255-4695",
										"movil": "9989-9999",
										"correo": "jaun@gmail.com",
										"direccion": "Jr. Cajamarca 999 - Urb. Palmeras",
										"image": "image/no-image.jpg"
									},
									{
										"id": 2,
										"nombre": "Pedro Morante Moscoso",
										"telefono": "(01) 554-9885",
										"movil": "9789-4566",
										"correo": "pedro@gmail.com",
										"direccion": "Los Naranjos 156",
										"image": "image/no-image.jpg"
									},
									{
										"id": 3,
										"nombre": "Jose Luis Tapia Mori",
										"telefono": "(01) 535-9886",
										"movil": "9986-5569",
										"correo": "jose@gmail.com",
										"direccion": "Av. Grau 2254",
										"image": "image/no-image.jpg"
									},
									{
										"id": 4,
										"nombre": "Marilin Mercedes Huancas Marchena",
										"telefono": "(01) 535-9886",
										"movil": "9986-5569",
										"correo": "marilin@gmail.com",
										"direccion": "Av. Grau 2254",
										"image": "image/no-image.jpg"
									},
									{
										"id": 5,
										"nombre": "Luis Cordova Leon",
										"telefono": "(01) 535-9886",
										"movil": "9986-5569",
										"correo": "luis.cordovaleon@gmail.com",
										"direccion": "Av. Tupac 8976",
										"image": "image/no-image.jpg"
									}
								];

			$scope.saveContacto = function() {
				$scope.contacts.push($scope.currentContacto);
				document.location = "#contactos";
			//console.log(JSON.stringify($scope.currentContacto));
			};

			$scope.eliminarContacto = function(index) {
				$scope.contacts.splice(index,1);
			}
		}]);

})()