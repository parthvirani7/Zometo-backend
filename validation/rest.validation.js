const joi = require("joi");

const addRest = {
  body: joi.object().keys({
    restName: joi.string().required().trim(),
    location: joi.string().required().trim(),
    rating: joi.string().required().trim(),
    charges: joi.string().required().trim(),
    description: joi.string().required().trim(),
  }),
};

module.exports = { addRest };
