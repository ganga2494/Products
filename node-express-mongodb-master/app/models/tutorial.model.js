module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      Productname: String,
      Catname: String,
      Price:Number
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Tutorial = mongoose.model("tutorial", schema);
  return Tutorial;
};
