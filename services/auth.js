const bcrypt = require('bcrypt');
const jwt = require('../modules/jwt');
const usersRepository = require('../repositories/users');

const login = async (body) => { 
  const userExists = await usersRepository.findByEmail(body.email);
  if (!userExists) throw new Error('Email is not registered');

  const validPassword = bcrypt.compareSync(body.password, userExists.password);
  if (!validPassword) throw new Error('Invalid Password');

  const payload = {
    id: userExists.id
  };
  const token = jwt.createToken(payload);
  
  return token;
};

module.exports = {
  login,
};
