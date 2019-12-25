app.service('authentication', ['$http', function($http) {

	return {
		authMobile: function(RECIPIENT_NUMBER) {
			return $http({
				method: 'GET',
				url: '/auth/mobile',
				params: {
					RECIPIENT_NUMBER: RECIPIENT_NUMBER
				}
			})
		},
		validateOTP: function(validate) {
			return $http({
				method: 'GET',
				url: '/auth/validate/otp',
				params: {
					request_id: validate.request_id,
					otp: validate.otp
				}
			})

		},
		cancelOTPRequest: function(request_id) {
			return $http({
				method: 'GET',
				url: '/auth/cancel/request',
				params: {
					request_id: request_id,
				}
			})

		}
	}
}]);