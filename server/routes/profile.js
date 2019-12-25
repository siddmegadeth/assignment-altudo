(function() {


	app.get("/check/user/exist", function(req, resp) {
		var mobile_number = req.query.mobile_number || req.body.mobile_number || req.params["mobile_number"];
		log("/check/user/exist");
		log(mobile_number);
		Profile.findOne({
			mobile_number: mobile_number
		}, function(err, found) {

			log("Result For Finding Mobile Number");
			log(found);

			if (err) {
				resp.send({
					error: 'Some Error Occured',
					err: err
				});
			}

			if (found) {
				log('User Exist. Cannot Create A New User');
				resp.send({
					error: 'User Exist. Cannot Create A New User',
					profile: found,
					isNewUser: false
				});


			} else {

				log('User Does Not Exist. Creating A New User');

				var profileTuple = new Profile({
					mobile_number: mobile_number
				});
				log(profileTuple);

				profileTuple.save(function(errSave, saved) {
					if (err) {
						resp.send({
							error: 'Some Error Occured While Creating Profile',
							err: err
						});
					}

					resp.send({
						error: 'User Does Not Exist.Creating New Profile',
						profile: found,
						isNewUser: true
					});


				});



			}

		});

	});



})();