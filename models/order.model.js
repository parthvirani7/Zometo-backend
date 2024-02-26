const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  totalBill: {
    type: String,
    require: true,
  },
  address: {
    type: mongoose.Schema.Types.ObjectId,
    ref:"restSchema",
  },
  item: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "menuSchema",
  },
  coustomer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "userSchema",
  },
});
const order = mongoose.model("orderScehma", orderSchema);
module.exports = order;
