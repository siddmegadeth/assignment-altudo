(function() {

    app.post("/file/upload", upload.single('fileItems'), function(req, resp, next) {
        log("/file/upload");
        log(req.file);
        var formData = {};

        formData.name = req.body.name;
        formData.email = req.body.email;
        formData.address = req.body.address;
        formData.phone = req.body.phone;
        formData.username = req.body.username;

        log("Data Recieved Data :");
        log(formData);

        resp.send({ status: true });
    });

    app.get("/download/pdf", upload.single('fileItems'), function(req, resp, next) {
        log("/download/pdf");
        var filePath = "downloads/dummy.pdf"; // Or format the path using the `id` rest param
        var fileName = "dummy.pdf"; // The default name the browser will use
        log(filePath);
        resp.download(filePath, fileName);
    });

})();