app.controller("profileCompletionCtrl", ['$scope', '$timeout', function($scope, $timeout) {


	$scope.updateProfile = function(fullName) {

		if (fullName == undefined) {
			ons.notification.toast({
				message: 'Please Provide Your Name',
				timeout: 2000,
				buttonLabel: 'Dismiss'
			});
		}
	}

}]);