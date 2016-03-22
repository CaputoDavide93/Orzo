'use strict';

/**
 * @ngdoc function
 * @name orzoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the orzoApp
 */
angular.module('orzoApp')
  .controller('LoginCtrl',['UsersFactory','$location','LoggedUserFactory', function (UsersFactory, $location, LoggedUserFactory) {
      var vm=this;
        vm.disLog;;
        vm.messLog="";
        vm.messReg="";
        vm.disReg;
        vm.mettiFuoco;

      vm.controllo=function(user,pass){
        if(UsersFactory.checkCredentials(user,pass)==='La password è sbagliata'){
            vm.messLog="Hai Sbagliato La Password " + user.toUpperCase()
 + " Per Questa Volte Non Fa Niente....";
            vm.disLog=false;
            vm.disReg=false;
        } else if(UsersFactory.checkCredentials(user,pass)==='Utente inesistente'){
           vm.messReg="Sei Sicurissimo Di Esserti Già Registrato?";
            vm.disLog=false;
            vm.disReg=true;
        } else vm.goToMain(user);
      };

          vm.goToMain=function(user){
            LoggedUserFactory.setLoggedUser(user);
            $location.path("/main");
          }

          vm.goToRegister=function(name,pass){
            LoggedUserFactory.setLoggedUserName(name);
            LoggedUserFactory.setLoggedUserPassword(pass);
           $location.path("/register");
          };


  }]);
