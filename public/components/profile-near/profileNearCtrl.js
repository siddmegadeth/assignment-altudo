app.controller('profileNearCtrl', ['$scope', '$timeout', 'talkjs', function($scope, $timeout, talkjs) {

	// Pull To Refresh
	$scope.pullToRefresh = function($done) {
		$timeout(function() {
		
			$done();
		}.bind(this), 1000);
	}.bind(this);

	// get List of All Chat Information
	var chat = [{
			name: 'siddharth 1',
			age: 22
		}, {
			name: 'siddharth 2',
			age: 25
		}, {
			name: 'siddharth 3',
			age: 21
		}, {
			name: 'siddharth 4',
			age: 33
		}, {
			name: 'siddharth 5',
			age: 93
		}, {
			name: 'siddharth 6',
			age: 213
		}, {
			name: 'siddharth 7',
			age: 83
		}, {
			name: 'siddharth 8',
			age: 23
		}, {
			name: 'siddharth 9',
			age: 53
		}, {
			name: 'siddharth 10',
			age: 43
		}, {
			name: 'siddharth 11',
			age: 13
		}, {
			name: 'siddharth 12',
			age: 63
		},


	];

	var chatLength = chat.length;

	$scope.delegate = {
		configureItemScope: function(index, itemScope) {
			itemScope.name = chat[index].name;
			itemScope.age = chat[index].age;
		},
		countItems: function() {
			log(chatLength);
			return chatLength;
		},
		calculateItemHeight: function() {
			log(ons.platform.isAndroid() ? 48 : 44);
			return ons.platform.isAndroid() ? 48 : 44;
		}
	};


}])