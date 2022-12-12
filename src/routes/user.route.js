const express = require('express');
const { authenticate, validate } = require('../auth/JWTMiddlewares');
const { userController } = require('../controllers');
const { validateNewUser } = require('../middlewares');

const userRoute = express.Router();

userRoute.post('/', validateNewUser, userController.create, authenticate);
userRoute.get('/:id', validate, userController.getById);
userRoute.get('/', validate, userController.getAll);

module.exports = userRoute;