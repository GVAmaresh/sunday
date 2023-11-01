const express = require('express');
const userController = require('../controllers/userController')
const router = express.Router();

router.route('/signup', userController.signup)
router.route('/login', userController.login)

module.exports = router;