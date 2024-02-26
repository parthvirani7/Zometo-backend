const { menuSchema } = require("../models");
const { orderSchema } = require("../models/order.model");

const addOrder = (body) => {
  return orderSchema.create(body);
};
const getOrder = () => {
  return orderSchema
    .find()
    .populate("user", { firstName: 1, contactNumber: 1 })
    .populate("mneu", { itemName: 1, price: 1 })
    .populate("rest", { restName: 1, location: 1 });
};

const deleteOrder = () => {
  return orderSchema.findByIdAndDelete();
};
const updateOrder = () => {
  return orderSchema.findByIdAndUpdate();
};

module.exports = {
  addOrder,
  getOrder,
  deleteOrder,
  updateOrder,
};
