const Joi = require("joi");

const addOrder = {
  body: Joi.object().keys({
    time: Joi.string().required().trim(),
    totalBill: Joi.string().required().trim(),
    address: Joi.string().required().trim(),
    item: Joi.string().required().trim(),
  }),
};
module.exports = {
  addOrder,
};
