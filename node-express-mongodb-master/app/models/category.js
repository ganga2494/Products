module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        Name: String,
        description:String,
        productcount:Number,
        productname:{type: Array},
        active: Boolean
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Category = mongoose.model("category", schema);
    return Category;
  };
  