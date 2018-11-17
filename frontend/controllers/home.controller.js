(function () {
    'use strict';

    angular
        .module('concentre')
        .controller('home.controller', Controller);

    function Controller($scope, $localStorage, $http) {        

        var vm = this;
        loadPlaces();
        loadUserData();
        $scope.enlargePlaceImg = function(){$scope.placeImgClass="col-12"};
        $scope.minimizePlaceImg = function(){$scope.placeImgClass="col-5"};
        $scope.placeImgClass ="col-5"

        function loadPlaces(){
            $http({
                method: "GET",
                url: "http://104.214.235.67:3000/places",
                params: {                
                }
            }).then(function mySuccess(response) {
                $scope.places = response.data;

            }, function myError(error) {
                console.error("Error cargando los datos de los sitios" + error);
            });
        
        }

        function loadUserData(){
            $http({
                method: "GET",
                url: "http://104.214.235.67:3000/user/winthero",
                params: {                
                }
            }).then(function mySuccess(response) {
                $scope.user = response.data;

            }, function myError(error) {
                console.error("Error cargando los datos de los sitios" + error);
            });
        }
    }

    

})();