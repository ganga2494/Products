module.exports = app => {
    const categorys = require("../controllers/category.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", categorys.create);
  
    // Retrieve all categorys
    router.get("/", categorys.findAll);
  
    // Retrieve all published categorys
    router.get("/published", categorys.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", categorys.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", categorys.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", categorys.delete);
  
    // Create a new Tutorial
    router.delete("/", categorys.deleteAll);
  
    app.use("/api/categorys", router);
  };
  