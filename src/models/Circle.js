const mongoose = require("mongoose");

const circleSchema = new mongoose.Schema({
  x: Number,
  y: Number,
  radius: Number,
});

module.exports = mongoose.model("Circle", circleSchema);
