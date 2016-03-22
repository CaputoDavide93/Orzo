'use strict';

/**
 * @ngdoc function
 * @name orzoApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the orzoApp
 */
angular.module('orzoApp')
  .controller('RegisterCtrl', ['unLoggedUser', 'LoggedUserFactory', '$location', 'UsersFactory', function (unLoggedUser, LoggedUserFactory, $location, UsersFactory){
  			var vm=this;
  		var user=unLoggedUser.name;
  		var pass=unLoggedUser.password;

		vm.utenteLocale={
			'Nome Utente': user,
			'Password': pass,
			'Nome': " " ,
			'Cognome': " ",
			'Email': " "
		};


		vm.regiCampi=function(user){
				console.log("PRIMA ",user);
			UsersFactory.addUser(user);
							console.log(UsersFactory.addUser(user));

		};



  }]);
