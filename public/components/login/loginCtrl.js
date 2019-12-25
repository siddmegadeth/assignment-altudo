app.controller('loginCtrl', ['$scope', '$rootScope', '$timeout', 'authentication', 'stateManager', 'profile', function($scope, $rootScope, $timeout, authentication, stateManager, profile) {



	$scope.hideLoader = function() {

		$timeout(function() {
			$scope.isLoginLoading = false;

		});
	}


	$scope.showLoader = function() {

		$timeout(function() {
			$scope.isLoginLoading = true;

		});
	}



	$timeout(function() {

		stateManager.clearSessionStorage();
		var input = document.querySelector("#phone");
		window.intlTelInput(input);

		//window.intlTelInput(input);
		$scope.iti = intlTelInput(input)
		$scope.iti.setCountry("in");
	})

	$scope.login = function() {

		$scope.showLoader();

		log($scope.iti.getNumber());
		log(countryData = $scope.iti.getSelectedCountryData());
		log($scope.iti.getValidationError());

		if ($scope.iti.isValidNumber()) {
			warn("Valid Number");
			authentication.authMobile($scope.iti.getNumber()).then(function(resp) {

				log(resp.data.request_id);
				//open OTP Verify And See If OTP Is Correct Or Wrong
				loginDialog.show();
				//save number 
				stateManager.saveMobileNumber($scope.iti.getNumber());
				stateManager.nexmoSaveRequestID(resp.data.request_id);



			})
		} else {

			$scope.hideLoader();
			warn("Not A Valid Number");

			if ($scope.iti.getNumber().length != 0)
				ons.notification.toast({
					message: "Not A Valid Number",
					timeout: 2000,
					buttonLabel: 'Dismiss'
				});
			else
				ons.notification.toast({
					message: "Provide Mobile Number",
					timeout: 2000,
					buttonLabel: 'Dismiss'
				});

		}
	}

	$scope.validateOTP = function(otp) {

		if (otp >= 4) {
			stateManager.nexmoSaveOTP(otp);
			// validate OTP Request with request_id
			$scope.nexmoRequest = {};
			$scope.nexmoRequest.request_id = stateManager.nexmoGetRequestID();
			$scope.nexmoRequest.otp = stateManager.nexmoGetOTP();


			warn("Validating OTP and Request_ID");
			log($scope.nexmoRequest);

			authentication.validateOTP($scope.nexmoRequest).then(function(resp) {

				warn("Validating OTP");
				log(resp);
				log(parseInt(resp.status));
				log(resp.data);
				log(parseInt(resp.data.status));
				if (resp.data.status == '0') {
					$timeout(function() {
						$scope.showLoader();


						warn("Check if User is new User or Returning User");
						log(stateManager.getMobileNumber());
						profile.ifUserExist(stateManager.getMobileNumber()).then(function(respCheck) {

							$scope.hideLoader();
							loginDialog.hide();


							// check if new user or old user
							log(respCheck);
							if (respCheck.data.isNewUser) {

								warn("New User Found. Create Profile");
								$scope.myNavigator.resetToPage('profile-completion.html', {
									animation: 'slide-md'
								});

							} else {
								// check is exisiting user profile is completed or not
								if (respCheck.data.isProfileCompleted) {


									warn("Existing User Found. Profile Completed Found ");
									$scope.myNavigator.resetToPage('home.html', {
										animation: 'lift-md'
									});
								} else {


									warn("Exisiting User Found. Profile Not Completed Found");
									$scope.myNavigator.pushPage('profile-completion.html', {
										animation: 'slide-md'
									});


								}

							}


						});

					})

				} else {
					$scope.hideLoader();

					warn("OTP Validation Not Happened");
					log(parseInt(resp.data.status));
					if (resp.data.status == '16') {

						ons.notification.toast({
							message: "OTP Value Did Not Matched",
							timeout: 2000,
							buttonLabel: 'Dismiss'
						});


					} else {
						ons.notification.toast({
							message: "Please Try Again",
							timeout: 2000,
							buttonLabel: 'Dismiss'
						});
					}

				}

			});
		} else {

			$scope.hideLoader();
			ons.notification.toast({
				message: "Provide 4 Digit OTP",
				timeout: 2000,
				buttonLabel: 'Dismiss'
			});

		}

	};

	$scope.cancelOTP = function() {
		loginDialog.hide();
		var request_id = stateManager.nexmoGetRequestID();

		authentication.cancelOTPRequest(request_id).then(function(resp) {
			log("Request Cancellation Results :");
			log(resp);
			$scope.hideLoader();

		});
	};


	// $scope.myNavigator.resetToPage('home.html', {
	// 				animation: 'lift-md'
	// 			});



}]);