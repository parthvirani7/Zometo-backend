const { paymentSchema } = require("../models");

const addPayment = (body) => {
  return paymentSchema.create(body);
};
const getPayment = () => {
  return paymentSchema
    .find()
    .populate("user", { location: 1, contactNumber: 1 })
    .populate("order", { coustomer: 1, totalBill: 1 });
};
const deletePayment = (id) => {
  return paymentSchema.findByIdAndDelete(id);
};
const updatePayment = (id, body) => {
  return paymentSchema.findByIdAndUpdate(id, body);
};

module.exports = {
  addPayment,
  getPayment,
  deletePayment,
  updatePayment,
};
