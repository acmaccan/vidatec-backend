const jwt = require('../modules/jwt');
const usersService = require('../services/users');

const getUserIdByToken = (req, res, next) => {
  const bearertoken = req.headers.authorization;
  const token = bearertoken.split(' ')[1];
  const { id } = jwt.decodeToken(token);

  return id;
}

const create = async (req, res, next) => {
  try {
    const data = await usersService.create(req.body);
    res.status(200).json(data);
  } catch (e) {
    next(e);
  }
};

module.exports = {
  getUserIdByToken,
  create
};