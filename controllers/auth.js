const authService = require('../services/auth');

const login = async (req, res, next) => {
  try {
    const token = await authService.login(req.body);
    if (!token) res.status(400).json('JWT can\'t be created');
    res.status(200).json(token);
  } catch (e) {
    next(e);
  }
};

module.exports = {
  login
};