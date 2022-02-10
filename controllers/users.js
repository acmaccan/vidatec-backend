const usersService = require('../services/users');

const create = async (req, res, next) => {
  try {
    const data = await usersService.create(req.body);
    res.status(200).json(data);
  } catch (e) {
    next(e);
  }
};

module.exports = {
  create
};