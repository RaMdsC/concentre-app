(function () {
    'use strict';
    angular
        .module('concentre', ['ui.router', 'ngMessages', 'ngStorage', 'ui.bootstrap', 'ngAnimate', 'hmTouchEvents', 'messages'])
        .config(config)
        .run(run)
        .controller('appController', controller);


    function controller($scope, AuthenticationService, $state) {
        $scope.state = $state;
        $scope.logOut = function () {
            AuthenticationService.logOut();
        };
    }

    function config($stateProvider, $urlRouterProvider) {        
        // default route
        $urlRouterProvider.otherwise("/");

        // app routes
        $stateProvider
            .state('sign-up', {
                url: '/sign-up',
                templateUrl: 'sign-up/sign-up.view.html',
                controller: 'sig-up.controller',
                controllerAs: 'vm'
            })
            .state('login', {
                url: '/login',
                templateUrl: 'views/login.view.html',
                controller: 'login.controller',
                controllerAs: 'vm'
            })
            .state('home', {
                url: '/',
                templateUrl: 'views/home.view.html',
                controller: 'home.controller',
                controllerAs: 'vm',                
            })
            .state('chat', {
                url: '/chat',
                templateUrl: 'views/chat.view.html',
                controller: 'chat.controller'
            })
            .state('map', {
                url: '/map',
                templateUrl: 'views/map.view.html',
                controller: 'map.Controller',
                controllerAs: 'vm'
            })
            .state('detail', {
                url: '/detail',
                templateUrl: 'views/detail.view.html',
                controller: 'detail.controller',
                controllerAs: 'vm'
            })
            .state('book-in', {
                url: '/book-in',
                templateUrl: 'views/book-in.view.html',
                controller: 'book-in.controller',
                controllerAs: 'vm'
            })
            .state('rating', {
                url: '/rating',
                templateUrl: 'views/rating.view.html',
                controller: 'rating.controller',
                controllerAs: 'vm'
            })
            .state('profile', {
                url: '/profile',
                templateUrl: 'views/profile.view.html',
                controller: 'profile.controller',
                controllerAs: 'vm'
            });
    }

    function run($rootScope, $http, $location, $localStorage) {
        // keep user logged in after page refresh
        if ($localStorage.currentUser) {
            $http.defaults.headers.common.Authorization = $localStorage.currentUser.token;
            $rootScope.islogged = true;
        }

        // redirect to login page if not logged in and trying to access a restricted page
        //TODO
        /*$rootScope.$on('$locationChangeStart', function (event, next, current) {
            var publicPages = ['/login'];
            var restrictedPage = publicPages.indexOf($location.path()) === -1;
            if (restrictedPage && !$localStorage.currentUser) {
                $location.path('/login');
            }
        });*/
    }

})();



