const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.tutorials = require("./tutorial.model.js")(mongoose);
db.medias = require("./media.js")(mongoose);
db.products = require("./product.js")(mongoose);
db.categorys = require("./category.js")(mongoose);
db.productcatlists = require("./productcatlist.js")(mongoose);



module.exports = db;
