const express = require('express');
const router = express.Router();

// const authMiddleware = require('../middlewares/validations');
const authController = require('../controllers/auth');

router.post('/', /*authMiddleware.loginInputValidation,*/ authController.login);

module.exports = router;
