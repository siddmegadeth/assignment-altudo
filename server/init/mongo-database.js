(function() {


	// MongoDB Connetion
	mongoose.connect("mongodb://admin:admin123@ds261077.mlab.com:61077/database-test");
	db = module.exports = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error:'));
	db.on('open', function() {
		log("Database Connected");
	});


})()