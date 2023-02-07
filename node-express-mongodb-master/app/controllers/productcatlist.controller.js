const db = require("../models");
const Productcatlist = db.productcatlists;

// Create and Save a new Productcatlist
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Productcatlist
  const productcatlist = new Productcatlist({
    Productname: req.body.productname,
    Categoryname: req.body.catname,
    Price:req.body.price
  });
console.log(productcatlist,"jjjjjjjjjjjj")
  // Save Productcatlist in the database
  productcatlist.save(productcatlist)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Productcatlist."
      });
    });
};

// Retrieve all Productcatlists from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

  Productcatlist.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

// Find a single Productcatlist with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Productcatlist.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Productcatlist with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Productcatlist with id=" + id });
    });
};

// Update a Productcatlist by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Productcatlist.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Productcatlist with id=${id}. Maybe Productcatlist was not found!`
        });
      } else res.send({ message: "Productcatlist was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Productcatlist with id=" + id
      });
    });
};

// Delete a Productcatlist with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Productcatlist.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Productcatlist with id=${id}. Maybe Productcatlist was not found!`
        });
      } else {
        res.send({
          message: "Productcatlist was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Productcatlist with id=" + id
      });
    });
};

// Delete all Productcatlists from the database.
exports.deleteAll = (req, res) => {
  Productcatlist.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Productcatlists were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all tutorials."
      });
    });
};

// Find all published Productcatlists
exports.findAllPublished = (req, res) => {
  Productcatlist.find({ published: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};
