'use strict';

/**
 * @ngdoc factory
 * @name orzoApp.LoggedUserFactory
 * @description
 * # LoggedUserFactory
 * Factory in the orzoApp.
 */
angular.module('orzoApp')
  .factory('LoggedUserFactory', ['UsersFactory', function (UsersFactory) {
    	var loggedUser = {id: -1, name: 'nessuno', password: 'nessuno', realName: 'nessuno', realSurname: 'nessuno', email: 'nessuno'};
        var loggedUserId = -1;

    	var _getLoggedUser = function(){
            // UsersFactory.getUserInfo();
    		return loggedUser;
    	};
    	var _getLoggedUserName = function(){
    	   return loggedUser.name
    	};
    	var _getLoggedUserPassword = function(){
    	   return loggedUser.password;
    	};
    	// var _getLoggedUserRealName = function(){
    	// 	return loggedUser.realName;
    	// };
    	// var _getLoggedUserRealSurname = function(){
    	// 	return loggedUser.realSurname
    	// };
    	// var _getLoggedUserEmail = function(){
    	// 	return loggedUser.password;
    	// };
    	var _setLoggedUser = function(userName){
    		loggedUser = UsersFactory.getUserInfo(userName);
            loggedUserId = loggedUser.id;
    	};
    	var _setLoggedUserName = function(name){
    		loggedUser.name = name;

    	};
    	var _setLoggedUserPassword = function(password){
    		loggedUser.password = password;
    	};
    	var _setLoggedUserRealName = function(realName){
    		loggedUser.realName = realName;
    	};
    	var _setLoggedUserRealSurname = function(realSurname){
    		loggedUser.realSurname = realSurname;
    	};
    	var _setLoggedUserEmail = function(email){
    		loggedUser.email = email;
    	};
    	var _logout = function(){
    		loggedUser = {name: 'nessuno', password: 'nessuno', realName: 'nessuno', realSurname: 'nessuno', email: 'nessuno'};
    	};
        var _updateUser = function(user){
            var tempUser = {};
            tempUser.id = loggedUserId;
            tempUser.name = user.name;
            tempUser.password = user.password;
            tempUser.realName = user.realName;
            tempUser.realSurname = user.realSurname;
            tempUser.email = user.email;
            
            loggedUser = UsersFactory.updateUser(tempUser);
        };
    	return {
    		/*GETTERS*/
    		getLoggedUser: _getLoggedUser,
    		getLoggedUserName: _getLoggedUserName,
    		getLoggedUserPassword: _getLoggedUserPassword,
    		/*SETTERS*/
    		setLoggedUser: _setLoggedUser,
    		setLoggedUserName: _setLoggedUserName,
    		setLoggedUserPassword: _setLoggedUserPassword,
    		setLoggedUserRealName: _setLoggedUserRealName,
    		setLoggedUserRealSurname: _setLoggedUserRealSurname,
    		setLoggedUserEmail: _setLoggedUserEmail,
    		/*OTHERS*/
    		logout: _logout,
            updateUser: _updateUser
    	}
    }]);
