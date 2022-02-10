const express = require('express');
const router = express.Router();

// const authMiddleware = require('../middlewares/auth');
const usersController = require('../controllers/users');

router.post('/', /*authMiddleware.registerInputValidation,*/ usersController.create);

module.exports = router;