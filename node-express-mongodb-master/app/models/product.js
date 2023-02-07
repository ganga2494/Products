module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        Name: String,
        description: String,
        Price:Number,
        category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
        image: { type: mongoose.Schema.Types.ObjectId, ref: 'Media' }
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });

    const Category = require("./category.js");
    const Media = require("./media.js");



    const Product = mongoose.model("product", schema);
    return Product;
  };
  