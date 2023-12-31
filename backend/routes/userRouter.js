const express = require('express');
const userController = require('../controllers/userController')
const router = express.Router();

router.route('/signup').post(userController.signup)
router.route('/login').post(userController.login)
router.route('/deleteAllUsers').delete(userController.deleteAllUser)

module.exports = router;