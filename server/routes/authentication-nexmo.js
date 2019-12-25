(function() {

	app.get("/auth/mobile", function(req, resp) {
		log("/auth/mobile");
		var RECIPIENT_NUMBER = req.query.RECIPIENT_NUMBER || req.body.RECIPIENT_NUMBER || req.params["RECIPIENT_NUMBER"];
		log(RECIPIENT_NUMBER);
		nexmo.verify.request({
			number: RECIPIENT_NUMBER,
			brand: "ChatUp"
		}, (err, result) => {
			if (err) {
				resp.send({
					error: 'error Occured',
					err: err
				});
			} else {
				log(result);
				const verifyRequestId = result.request_id;
				console.log('request_id', verifyRequestId);
				resp.send(result);
			}
		});


	});

	app.get("/auth/validate/otp", function(req, resp) {
		var request_id = req.query.request_id || req.body.request_id || req.params["request_id"];
		var otp = req.query.otp || req.body.otp || req.params["otp"];
		nexmo.verify.check({
			request_id: request_id,
			code: parseInt(otp)
		}, function(err, result) {

			if (err) {
				resp.send({
					error: 'error Occured While Validating OTP',
					err: err
				});
			} else {

				// check if user is exisiting user or new user
				log(result);
				resp.send(result);
			}

		});

	});

	app.get("/auth/cancel/request", function(req, resp) {

		var request_id = req.query.request_id || req.body.request_id || req.params["request_id"];

		nexmo.verify.control({
			request_id: request_id,
			cmd: 'cancel'
		}, function(err, result) {

			if (err) {
				resp.send({
					error: 'error Occured While Cancelling Request',
					err: err
				});
			} else {
				log(result);
				resp.send(result);
			}

		});


	});


})()