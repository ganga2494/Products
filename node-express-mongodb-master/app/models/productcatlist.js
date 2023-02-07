module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        Productname: String,
        Categoryname: String,
        Price:Number,
        published: Boolean
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Productcatlist = mongoose.model("productcatlist", schema);
    return Productcatlist;
  };
  