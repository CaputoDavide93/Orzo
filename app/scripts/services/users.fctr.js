'use strict';

/**
 * @ngdoc factory
 * @name orzoApp.UsersFactory
 * @description
 * # UsersFactory
 * Factory in the orzoApp.
 */
angular.module('orzoApp')
  .factory('UsersFactory',['$timeout', function ($timeout) {
    	var userExists = function(userName){
            var ret = false;
			for (var i=0,length=users.length;i<length;i++){
				if (users[i].name == userName) ret = true;
			}
            return ret;
    	};
    	var passwordIsCorrect = function(userName, password){
			var ret = false;
			for (var i=0, length=users.length;i<length;i++){
    			if (users[i].password == password) {
    				ret = true;
    				break;
    			}
			}
			return ret;
    	};
    	var _checkCredentials = function (userName, password){
    		if (userExists(userName)) {
    			if (passwordIsCorrect(userName, password)) return true;
    			else return 'La password è sbagliata';
    		} else return 'Utente inesistente';
    	};
        var _getUserInfo = function (userName){
            for (var i=0, length=users.length;i<length;i++){
                if (users[i].name==userName) {
                    return users[i];
                }
            }
        };
        var _addUser = function (user){
            user.id = users.length+1;
            users.push(user);
        };
        var _updateUser = function(user){
            for (var i=0, length=users.length;i<length;i++){
                if (users[i].id == user.id) {
                    users[i] = user;
                    return user;
                }
            }
        };
    	var users = [
    	{
    		id: 1,
            name: 'Davide',
    		password: 'da',
            realName: 'Davide',
            realSurname: 'Caputo',
            email: 'caputodav93@gmail.com'
    	},
    	{
    		id: 2,
            name: 'Jack',
    		password: 'ja',
            realName: 'Gianluca',
            realSurname: 'Esposito',
            email: 'g.esposito16@gmail.com'
    	},
    	{
    		id: 3,
            name: 'Pippo',
    		password: 'pi',
            realName: 'Pippo',
            realSurname: 'Poi',
            email: 'pippopoi@gmail.com'
    	},
    	{
    		id: 4,
            name: 'Pluto',
    		password: 'pl',
            realName: 'Pluto',
            realSurname: 'Mouse',
            email: 'plutomouse@gmail.com'
    	},
    	{
    		id: 5,
            name: 'Paperino',
    		password: 'pa',
            realName: 'Donald',
            realSurname: 'Duck',
            email: 'donaldduck@gmail.com'
    	}
		];
  	return {
  		checkCredentials: _checkCredentials,
        getUserInfo: _getUserInfo,
        addUser: _addUser,
        updateUser: _updateUser
  	}    
}]);
