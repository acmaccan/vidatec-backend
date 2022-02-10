const jwt = require('jsonwebtoken');

const privateKey = process.env.JWT_PRIVATE_KEY;

const singOptions = {
  expiresIn: '8h',
  algorithm: 'HS256'
};

const createToken = (payload) => jwt.sign(payload, privateKey, singOptions);
const decodeToken = (token) => jwt.verify(token, privateKey);

module.exports = {
  createToken,
  decodeToken
};