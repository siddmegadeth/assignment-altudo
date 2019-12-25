(function() {

	app.get("/file/upload", upload.single('avatar'), function(req, resp, next) {
		log(req.file);
	});

})();