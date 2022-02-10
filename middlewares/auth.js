const jwt = require('../modules/jwt');
const usersRepository = require('../repositories/users');

const isAuthenticated = async (req, res, next) => {
  const bearertoken = req.headers.authorization;
  if (!bearertoken) return res.status(403).json('Access denied');

  try {
    const token = bearertoken.split(' ')[1];
    const { id } = jwt.decodeToken(token);

    const userExists = await usersRepository.findById(id);
    if (!userExists) return res.status(403).json('User doesn\'t exist');

    req.data = userExists.id;

    next();
  } catch (error) {
    res.status(403).json('Invalid token');
  }
};

module.exports = {
  isAuthenticated
};