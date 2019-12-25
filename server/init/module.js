(function() {

	log = module.exports = console.log.bind(console);
	http = module.exports = require("http");
	express = module.exports = require("express");
	app = module.exports = express();
	mongoose = module.exports = require("mongoose");
	multer = module.exports = require('multer');
	r = module.exports = require('rethinkdb');
	rethinkDatabase = module.exports = r.db('hookupchatserver');
	bodyParser = module.exports = require('body-parser')
	Nexmo = module.exports = require('nexmo');
	nexmo = module.exports = new Nexmo({
		apiKey: "c1208b9a",
		apiSecret: "BSlUNoWRmTj1FfMZ"
	});



})()