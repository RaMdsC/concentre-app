(function () {
    'use strict';

    angular
        .module('concentre')
        .controller('chat.controller', Controller);

    function Controller($scope, $location, MESSAGES) {   
        $scope.messages = MESSAGES;
        $scope.nb_msg = 0

        $scope.setStyle = function() {
            let user = $scope.messages[$scope.nb_msg].user;
            let style = "message0";
            if(user === "Andres") {
                style = "message1";
            }
            $scope.nb_msg += 1;
            return style;
        }
    }
})();
