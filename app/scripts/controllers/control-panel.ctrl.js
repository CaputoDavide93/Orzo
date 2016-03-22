'use strict';

/**
 * @ngdoc function
 * @name orzoApp.controller:ControlPanelCtrl
 * @description
 * # ControlPanelCtrl
 * Controller of the orzoApp
 */
angular.module('orzoApp')
  .controller('ControlPanelCtrl',[ 'LoggedUserFactory', 'loggedUser', '$location', function (LoggedUserFactory, loggedUser, $location) {
		var vm=this;
		var utenteTemp=loggedUser;
		vm.utenteLocale={
			'Nome Utente': utenteTemp.name,
			'Password': utenteTemp.password,
			'Nome': utenteTemp.realName,
			'Cognome': utenteTemp.realSurname,
			'Email': utenteTemp.email
		};

		vm.goToFunction=function(){
			 $location.path("/main");
		};

		vm.updateCampi=function(user){
				console.log("PRIMA ",user);
				// console.log("PRIMA ",vm.utenteLocale)
			// LoggedUserFactory.updateUser(vm.utenteLocale);
			LoggedUserFactory.updateUser(user);
							console.log("DOPO ",user);
							// console.log("DOPO ",vm.utenteLocale)

		};


  }]);
