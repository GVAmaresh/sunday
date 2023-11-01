const express = require('express')
const router = express.Router()
const projectController = require('../controllers/projectController')

router.route('/createProject').get(projectController.createProject)
module.exports = router