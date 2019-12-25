app.service('profile', ['$http', function($http) {
	return {
		ifUserExist: function(mobileNumber) {
			log(mobileNumber);
			return $http({
				method: 'GET',
				url: '/check/user/exist',
				params: {
					mobile_number: mobileNumber
				}
			})
		}

	}
}]);