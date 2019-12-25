app.controller('verifyCtrl', ['$scope', '$timeout', 'talkjs', function($scope, $timeout, talkjs) {



	$timeout(function() {

		
		$scope.myNavigator.resetToPage('login.html', {
			animation: 'lift-md'
		},3000);
	});



}]);