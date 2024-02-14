const express = require('express');
const router = express.Router()
const authController = require('../src/controllers/authController');
const passport = require('../src/passport_config')

router.post('/login', authController.login);

module.exports = router;