const express = require('express');
// const { validate } = require('../auth/JWTMiddlewares');
// const { postController } = require('../controllers');

const postRoute = express.Router();

// postRoute.post('/', validate, postController.create);
// postRoute.get('/', validate, postController.getAll);

// postRoute.get('/:id', validate, postController.getById);
// postRoute.put('/:id', validate, postController.updateById);
// postRoute.delete('/:id', validate, postController.deleteById);

module.exports = postRoute;