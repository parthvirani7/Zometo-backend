const { number } = require("joi");
const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
  itemName: {
    type: String,
    require: true,
  },
  type: {
    type: String,
    require: true,
  },
  category: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  restaurant:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"restSchema"
  },
  description: {
    type: String,
    require: true,
  },
});
const menu = mongoose.model("menuSchema", menuSchema);
module.exports = menu;
