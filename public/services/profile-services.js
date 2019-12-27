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
		},
		updateProfile: function() {
			return $http({
				method: 'GET',
				url: '/update/profile',
				params: {
					mobile_number: profile.mobileNumber,
					full_name: profile.full_name
				}
			})

		}

	}
}]);