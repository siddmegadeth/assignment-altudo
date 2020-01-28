app.controller('loginCtrl', ['$scope', '$rootScope', '$timeout', '$location', '$uibModal', function($scope, $rootScope, $timeout, $location, $uibModal) {

    // $timeout(function() {
    //     var input = document.querySelector("#phone");
    //     window.intlTelInput(input);

    //     //window.intlTelInput(input);
    //     $scope.iti = intlTelInput(input)
    //     $scope.iti.setCountry("in");
    // })

    $scope.login = function(username,password) {
        warn("Perform Login");
        log(username,password);
        if (username && password) {
            $location.path("landing");
        } else {
            $uibModal.open({
                templateUrl : 'components/login/login-modal.html',
                size: 'lg'
            })
        }
    }

}]);