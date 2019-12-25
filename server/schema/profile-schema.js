(function() {

	ProfileSchema = mongoose.Schema({
		username: {
			type: String,
			unique: true,
		},
		email: {
			type: String,
		},
		fullName: {
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
		}
	});

	Profile = module.exports = mongoose.model("Profile", ProfileSchema);


})()