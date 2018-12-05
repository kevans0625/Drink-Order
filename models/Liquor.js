const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Creates schema for mango database
const liquorSchema = new Schema({
  name: { type: String, required: true },
  type: String,
  bottleVolume: Number,
  bottleCost: Number,

  //added User ID to tie liquor to specific users
  userID: {type: Number, required: true}
});

const Liquor = mongoose.model("Liquor", liquorSchema);

module.exports = Liquor;