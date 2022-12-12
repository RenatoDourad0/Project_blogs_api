const express = require('express');
const { validate } = require('../auth/JWTMiddlewares');
const { validateCategory } = require('../middlewares');
const { categoriesController } = require('../controllers');

const categoriesRoute = express.Router();

categoriesRoute.post('/', validateCategory, validate, categoriesController.create);
categoriesRoute.get('/', validate, categoriesController.getAll);

// categoriesRoute.get('/:id', validate, postController.getById);
// categoriesRoute.put('/:id', validate, postController.updateById);
// categoriesRoute.delete('/:id', validate, postController.deleteById);

module.exports = categoriesRoute;