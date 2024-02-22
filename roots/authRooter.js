const express = require('express');
const routerLogin = express.Router()
const authController = require('../src/controllers/authController');

routerLogin.post('/', authController.login);

module.exports = routerLogin;