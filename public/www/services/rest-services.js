app.service('restServices', ['$http', function($http) {

    return {
        sendForm: function(form) {

            return $http.post("/file/upload", form, {
                transformRequest: angular.identity,
                headers: { 'Content-Type': undefined }
            });
        }
    }
}]);