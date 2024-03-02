const mongoose = require("mongoose");

const Schema = mongoose.Schema({
  CourtNum: String,
  CourtsTime: String,
  id: String,
});

module.exports = mongoose.model("Courts_Database", Schema);
