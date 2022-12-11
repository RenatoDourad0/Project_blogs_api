const express = require('express');
const { authenticate } = require('../auth/JWTMiddlewares');
const { loginController } = require('../controllers');

const loginRoute = express.Router();

loginRoute.post('/', loginController.login, authenticate);

module.exports = loginRoute;