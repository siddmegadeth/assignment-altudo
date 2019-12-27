(function() {

	ProfileSchema = mongoose.Schema({
		user_name: {
			type: String,
			unique: true,
		},
		email: {
			type: String,
		},
		full_name: {
			type: String,
		},
		display_picture: {
			type: String
		},
		pictures: {
			type: String
		},
		mobile_number: {
			type: Number,
			unique: true,
			index: true,
			required: true

		},
		isProfileCompleted: {
			type: Boolean,
			deafult: false
		},
		about_myself: {
			type: String,
		}
	});

	Profile = module.exports = mongoose.model("Profile", ProfileSchema);


})()