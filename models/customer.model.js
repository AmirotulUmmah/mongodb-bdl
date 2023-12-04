module.exports = (mongoose) => {
  const schema = mongoose.Schema(
    {
      nama_lengkap: String,
      jenis_kelamin: String,
      alamat: String,
      tanggal_berkunjung: Date,
    },
    {
      timestamps: true,
    }
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;

    return object;
  });

  return mongoose.model("customer", schema);
};
