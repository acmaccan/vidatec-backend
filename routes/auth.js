const express = require('express');
const router = express.Router();

const authMiddleware = require('../middlewares/validation');
const authController = require('../controllers/auth');

router.post('/', authMiddleware.loginValidation, authController.login);

module.exports = router;
