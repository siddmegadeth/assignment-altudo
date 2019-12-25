(function() {

	app.set("PORT", 3001 || process.env.PORT);

	var storage = multer.diskStorage({
		destination: function(req, file, cb) {
			cb(null, '/tmp/my-uploads')
		},
		filename: function(req, file, cb) {
			cb(null, file.fieldname + '-' + Date.now())
		}
	});

	app.use(express.static("public"));

	// parse application/x-www-form-urlencoded
	app.use(bodyParser.urlencoded({
		extended: false
	}))

	// parse application/json
	app.use(bodyParser.json())



	upload = module.exports = multer({
		storage: storage
	});


})()