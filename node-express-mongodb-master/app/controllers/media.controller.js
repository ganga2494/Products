const db = require("../models");
const Media = db.medias;

// Create and Save a new Media
exports.create = (req, res) => {
  // Validate request
  

//   Create a Media
  const media = new Media({
    originalFilename : req.files.uploads[0].originalFilename,
    //  file.path = file.path.replace("../", "");
     path :req.files.uploads[0].path.replace("./", ""),
    
    size : req.files.uploads[0].size,
    type : req.files.uploads[0].type,
    name : req.files.uploads[0].name,
  });
console.log(media)
console.log(req.files,"files")
var file = {};
  file.originalFilename = req.files.uploads[0].originalFilename;
  file.path = req.files.uploads[0].path;
  file.path = file.path.replace("../", "");
  file.size = req.files.uploads[0].size;
  file.type = req.files.uploads[0].type;
  file.name = req.files.uploads[0].name;
  console.log(file);
  // Save Media in the database
  media.save(file)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Media."
      });
    });
};

// Retrieve all Medias from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

  Media.find(condition)
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

// Find a single Media with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Media.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Media with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Media with id=" + id });
    });
};

// Update a Media by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Media.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Media with id=${id}. Maybe Media was not found!`
        });
      } else res.send({ message: "Media was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Media with id=" + id
      });
    });
};

// Delete a Media with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Media.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Media with id=${id}. Maybe Media was not found!`
        });
      } else {
        res.send({
          message: "Media was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Media with id=" + id
      });
    });
};

// Delete all Medias from the database.
exports.deleteAll = (req, res) => {
  Media.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Medias were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all tutorials."
      });
    });
};

// Find all published Medias
exports.findAllPublished = (req, res) => {
  Media.find({ published: true })
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
