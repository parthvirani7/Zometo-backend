const Joi = require("joi");

const addMenu = {
  body: Joi.object().keys({
    itemName: Joi.string().required().trim(),
    type: Joi.string().required().trim(),
    category: Joi.string().required().trim(),
    price: Joi.number().required(),
    restaurant: Joi.string().required(),
    description: Joi.string().required().trim(),
  }),
};

module.exports = {
  addMenu
};




