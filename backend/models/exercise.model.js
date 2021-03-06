const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchame = new Schema({
  username: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: Number, required: true },
  date: { type: Date, required: true },
});

const Exercise = mongoose.model("Exercise", exerciseSchame);

module.exports = Exercise;
