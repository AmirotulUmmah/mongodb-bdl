const dbConfig = require("../config/database");
const mongoose = require("mongoose");

module.exports = {
  mongoose,
  url: dbConfig.url,
  customer: require("./customer.model.js")(mongoose),
};
