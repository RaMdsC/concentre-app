(function () {
    'use strict';

    angular
        .module('concentre')
        .factory('AuthenticationService', Service);

    function Service($http, $localStorage, $rootScope) {
        var service = {};


        service.Login = Login;
        service.Logout = Logout;

        return service;

        function Login(username, password, callback) {                                  
            $http.post('', { username: username, password: password })
            .then(function successCallback(response) {                                     
                if (response.headers()['authorization']) {
                    // store username and token in local storage to keep user logged in between page refreshes
                    $localStorage.currentUser = { username: username, token: response.headers()['authorization']};                    
                    $http.defaults.headers.common.Authorization = response.headers()['authorization'];                    
                    //show the menu if logged
                    $rootScope.islogged = true;                    
                    callback(true);
                } 
             }, function errorCallback(response) {                
                callback(false);
             });
        }

        function Logout() {
            // remove user from local storage and clear http auth header
            $rootScope.islogged = false;
            delete $localStorage.currentUser;
            $http.defaults.headers.common.Authorization = '';
        }
    }
})();