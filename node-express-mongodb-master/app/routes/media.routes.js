module.exports = app => {
    const medias = require("../controllers/media.controller.js");

    var router = require("express").Router();
    // var multiparty = require('connect-multiparty');
    var path = require('path');
    // var multipartyMiddleware = multiparty();

    const multipart = require('connect-multiparty');
const multipartMiddleware = multipart({
    uploadDir: '../uploads'
});
    
    console.log('../../uploads');
    // router.use(multiparty({ uploadDir: path.dirname('../uploads') + '/uploads' }));
    // Create a new Tutorial
    router.post("/",multipartMiddleware,medias.create);

    // Retrieve all medias
    router.get("/", medias.findAll);

    // Retrieve all published medias
    router.get("/published", medias.findAllPublished);

    // Retrieve a single Tutorial with id
    router.get("/:id", medias.findOne);

    // Update a Tutorial with id
    router.put("/:id", medias.update);

    // Delete a Tutorial with id
    router.delete("/:id", medias.delete);

    // Create a new Tutorial
    router.delete("/", medias.deleteAll);

    app.use("/api/medias", router);
};
