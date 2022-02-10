const bcrypt = require('bcrypt');
const usersRepository = require('../repositories/users');

const create = async (body) => {
  const salt = bcrypt.genSaltSync();
  const hashedPassword = bcrypt.hashSync(body.password, salt);

  const emailExists = await usersRepository.findByEmail(body.email);
  if (emailExists) throw new Error ('Email is already registered');

  const user = {
    email: body.email,
    password: hashedPassword
  }
  
  const data = await usersRepository.create(user);
  return data;
};

module.exports = {
  create
};