const express = require('express');
const { authenticate } = require('../auth/JWTMiddlewares');
const { userController } = require('../controllers');
const { validateNewUser } = require('../middlewares');

const userRoute = express.Router();

userRoute.post('/', validateNewUser, userController.create, authenticate);

module.exports = userRoute;