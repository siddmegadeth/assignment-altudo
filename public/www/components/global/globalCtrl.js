app.controller('globalCtrl', ['$scope', '$location', '$timeout', '$uibModal', function($scope, $location, $timeout, $uibModal) {

    $scope.isActive = function(loc) {

        return loc === $location.path();
    }
}])