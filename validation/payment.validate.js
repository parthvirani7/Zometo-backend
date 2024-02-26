const joi = require("joi");

const addPayment = {
  body: joi.object().keys({
    type: joi.string().required().trim(),
    order: joi.string().required(),
    totalAmount: joi.string().required().trim(),
    date:joi.string().required().trim(),
    user:joi.string().required()

  }),
};
module.exports = { addPayment };
