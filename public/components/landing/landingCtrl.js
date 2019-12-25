app.controller('landingCtrl', ['$scope', '$rootScope', '$timeout', function($scope, $rootScope, $timeout) {

	

	Talk.ready.then(function() {
		warn("TalkJS Ready");
		var me = new Talk.User({
			id: "123456",
			name: "Alice",
			email: "alice@example.com",
			photoUrl: "https://demo.talkjs.com/img/alice.jpg",
			welcomeMessage: "Hey there! How are you? :-)"
		});
		window.talkSession = new Talk.Session({
			appId: "t3rP1O9r",
			me: me
		});
		var other = new Talk.User({
			id: "654321",
			name: "Sebastian",
			email: "Sebastian@example.com",
			photoUrl: "https://demo.talkjs.com/img/sebastian.jpg",
		});

		var other2 = new Talk.User({
			id: "654322",
			name: "Sebastian Shaw",
			email: "Sebastian2@example.com",
			photoUrl: "https://demo.talkjs.com/img/sebastian.jpg",
		});



		var conversation = talkSession.getOrCreateConversation(Talk.oneOnOneId(me, other))
		conversation.setParticipant(me);
		conversation.setParticipant(other);
		conversation.setParticipant(other2);

		var inbox = talkSession.createInbox();
		var chatbox = talkSession.createChatbox(conversation, {
			showChatHeader: false,
		});

		// inbox.mount(document.getElementById("talkjs-container-inbox"));

		chatbox.mount(document.getElementById("talkjs-container"));


		inbox.createHtmlPanel({
				url: "chat.html", // or the absolute path "https://www.mywebsite.com/frames/register-form.html"
				height: 300,
				show: true
			})
			.then(function(htmlPanel) {
				htmlPanel.DOMContentLoadedPromise.then(function() {
					// ... do work that includes manipulation of the DOM.
					var form = htmlPanel.window.document.getElementById("registration-form");
					form.submit();
				});
				htmlPanel.windowLoadedPromise.then(function() {
					// ... do work that requires all assets (including images, css, scripts, etc) of the HTML Panel to be fully loaded.
				});
			});
	});



}])