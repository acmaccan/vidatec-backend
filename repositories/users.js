const User = require('../models/User');

const findByEmail = async (email) => {
  const data = await User.findOne({ email: email });
  return data;
};

const create = async (body) => {
  const data = await User.create(body);
  return data;
};

const findById = async (id) => {
  const data = await User.findOne({ _id: id });
  return data;
};

module.exports = {
  findByEmail,
  create,
  findById
};