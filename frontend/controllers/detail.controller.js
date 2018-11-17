(function () {
    'use strict';

    angular
        .module('concentre')
        .controller('detail.controller', Controller);

    function Controller($scope, $localStorage, $http) {    
        var vm = this;
        loadPlace();
        
        
        $scope.placeImgClass ="col-5"

        function loadPlace(){
            $http({
                method: "GET",
                url: "http://104.214.235.67:3000/place/6826362953",
                params: {                
                }
            }).then(function mySuccess(response) {
                var slides = [];
                response.data.imagePath.array.forEach(element => {
                    slides.push(element);
                });
                $scope.slides = slides;
                console.log(response.data)
                $scope.place = response;

            }, function myError(error) {
                console.error("Error cargando los datos de los sitios" + error);
            });
        
        }


    }

    

})();