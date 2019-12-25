app.service('stateManager', ['$http', function($http) {

	return {

		nexmoSaveRequestID: function(request_id) {
			window.sessionStorage.setItem("request_id", request_id);
		},
		nexmoGetRequestID: function(request_id) {
			return window.sessionStorage.request_id;
		},
		nexmoSaveOTP: function(otp) {
			window.sessionStorage.setItem("otp", otp);
		},
		nexmoGetOTP: function(otp) {
			return window.sessionStorage.otp;
		},
		saveMobileNumber: function(mobileNumber) {
			var number = mobileNumber.slice("1");
			log(number);
			window.sessionStorage.setItem("mobile_number", number);
		},
		getMobileNumber: function() {
			return window.sessionStorage.mobile_number;
		},
		clearSessionStorage: function() {
			window.sessionStorage.clear();
		}


	}

}]);