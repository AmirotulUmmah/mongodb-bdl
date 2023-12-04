const db = require("../models");
const Customer = db.customer;

exports.findAll = (req, res) => {
  Customer.find()
    .then((data) => res.send(data))
    .catch((err) => res.status(500).send({ message: err.message }));
};

exports.show = (req, res) => {
  const id = req.params.id;

  Customer.findById(id)
    .then((data) => res.send(data))
    .catch((err) => res.status(500).send({ message: err.message }));
};

exports.create = (req, res) => {
  req.body.tanggal_berkunjung = new Date(req.body.tanggal_berkunjung);

  Customer.create(req.body)
    .then(() => res.send({ message: "Data berhasil disimpan" }))
    .catch((err) => res.status(500).send({ message: err.message }));
};

exports.update = (req, res) => {
  const id = req.params.id;

  if (req.body.tanggal_berkunjung) {
    const incomingDate = new Date(req.body.tanggal_berkunjung);

    if (isNaN(incomingDate)) {
      return res.status(400).send({ message: "Invalid date format for tanggal_berkunjung" });
    }

    req.body.tanggal_berkunjung = incomingDate;
  }

  Customer.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: "Tidak dapat mengupdate data" });
      }
      res.send({ message: "Data berhasil diupdate" });
    })
    .catch((err) => res.status(500).send({ message: err.message }));
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Customer.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: "Tidak dapat menghapus data" });
      }
      res.send({ message: "Data berhasil dihapus" });
    })
    .catch((err) => res.status(500).send({ message: err.message }));
};
