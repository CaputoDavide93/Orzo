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

		vm.updateCampi=function(){
				console.log("PRIMA ",vm.utenteLocale)
			LoggedUserFactory.updateUser(vm.utenteLocale);
							console.log("DOPO ",vm.utenteLocale)

		};


  }]);
