app.controller('landingCtrl', ['$scope', '$rootScope', '$timeout', 'restServices', 'Upload', '$http', '$uibModal', function($scope, $rootScope, $timeout, restServices, Upload, $http, $uibModal) {


    $scope.submitForm = function(files, model) {

        warn("Update Form:");
        log(files);
        log(model);
        var fd = new FormData();

        fd.append('fileItems', files);

        log(fd);

        fd.append('name', model.inputName);
        fd.append('email', model.inputEmail);
        fd.append('address', model.inputAddress);
        fd.append('phone', model.inputPhone);
        fd.append('username', model.inputUsername);
        log(fd);
        restServices.sendForm(fd).then(function(resp) {
            if (resp.data.status) {
                $uibModal.open({
                    templateUrl: 'components/landing/download.html',
                    size: 'lg',
                    controller: 'landingCtrl'
                })
            }

        });

    }

}])