const express = require('express');
const router = express.Router();

const usersRoutes = require('./users');
const authRoutes = require('./auth');
const tasksRoutes = require('./tasks');

// router.use('/', (req, res) => {
//   res.send('Welcome to TO-DO app.');
// });

router.use('/register', usersRoutes);
router.use('/login', authRoutes);
router.use('/tasks', tasksRoutes);

module.exports = router;