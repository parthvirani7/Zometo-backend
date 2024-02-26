const { userSchema } = require("../models");

const getUser = () => {
  return userSchema.find();
};

const addUser = (body) => {
  return userSchema.create(body);
};

const deleteUser = (id) => {
  return userSchema.findByIdAndelete(id);
};

const updateUser = (id, body) => {
  return userSchema.findByIdAndUpdate(id, { $set: body });
}

const findUser = (email) => {
  return userSchema.findOne({ email: email });
};

const getUserByEmail = (email) => {
  return userSchema.findOne({ email });
};

module.exports = {
  getUser,
  addUser,
  deleteUser,
  updateUser,
  getUserByEmail,
  findUser,
};
