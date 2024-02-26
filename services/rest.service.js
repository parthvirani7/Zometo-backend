const { restSchema } = require("../models");

const addRest = (body) => {
  return restSchema.create(body);
};

const getRest = () => {
  return restSchema.find();
};

const deleteRest = (id) => {
  return restSchema.findByIdAndDelete(id);
};

const updateRest = (id, body) => {
  return restSchema.findByIdAndUpdate(id, body);
};

module.exports = {
  addRest,
  getRest,
  deleteRest,
  updateRest,
};
