const express = require('express');
const router = express.Router();

// const authMiddleware = require('../middlewares/auth');
const tasksController = require('../controllers/tasks');

router.get('/', /*authMiddleware.isAuthenticated,*/ tasksController.getAll);
router.get('/:id', /*authMiddleware.isAuthenticated,*/ tasksController.getById);
router.post('/', /*authMiddleware.isAuthenticated,*/ tasksController.create);
router.put('/:id', /*authMiddleware.isAuthenticated,*/ tasksController.update);
router.delete('/:id', /*authMiddleware.isAuthenticated,*/ tasksController.remove);

module.exports = router;