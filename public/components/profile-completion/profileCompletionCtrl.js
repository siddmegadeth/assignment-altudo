app.controller("profileCompletionCtrl", ['$scope', '$timeout', function($scope, $timeout) {


	$scope.updateProfile = function(fullName) {

		log(fullName);
		log(fullName.length);
		if (fullName == undefined || fullName.length == 0) {
			ons.notification.toast({
				message: 'Please Provide Your Name',
				timeout: 2000,
				buttonLabel: 'Dismiss'
			});
		} else {

			// create logic to update user profile
			var profile = {};
			profile.full_name = fullName;
			profile.isProfileCompleted = true;

			ons.notification.toast({
				message: 'updating......',
				timeout: 2000,
				buttonLabel: 'Dismiss'
			}).then(function()
			{
				log("Updating....");

			});


		}
	}

}]);