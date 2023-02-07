module.exports = app => {
    const productcatlists = require("../controllers/productcatlist.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", productcatlists.create);
  
    // Retrieve all productcatlists
    router.get("/", productcatlists.findAll);
  
    // Retrieve all published productcatlists
    router.get("/published", productcatlists.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", productcatlists.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", productcatlists.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", productcatlists.delete);
  
    // Create a new Tutorial
    router.delete("/", productcatlists.deleteAll);
  
    app.use("/api/productcatlists", router);
  };
  