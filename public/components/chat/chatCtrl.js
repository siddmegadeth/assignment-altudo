app.controller('chatCtrl', ['$scope', '$timeout', 'talkjs', function($scope, $timeout, talkjs) {

	// Pull To Refresh
	$scope.pullToRefresh = function($done) {
		$timeout(function() {
			log("Chat Ctrl");
			$done();
		}.bind(this), 1000);
	}.bind(this);



}])