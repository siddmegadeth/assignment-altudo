(function() {

    app.set("PORT", 3001 || process.env.PORT);

    var storage = multer.diskStorage({
        destination: function(req, file, cb) {
            cb(null, 'uploads')
        },
        filename: function(req, file, cb) {
            log("####################");
            log("Multer Name :");
            log(file);
            log("####################");

            cb(null, Date.now() + file.originalname);

        }
    });

    app.use(express.static("public/www"));

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