const express = require('express');
const { validate } = require('../auth/JWTMiddlewares');
const { postController } = require('../controllers');
const { validatePost } = require('../middlewares');

const postRoute = express.Router();

postRoute.post('/', validatePost, validate, postController.create);
postRoute.get('/', validate, postController.getAll);
postRoute.get('/:id', validate, postController.getById);
postRoute.put('/:id', validate, postController.updateById);

// postRoute.delete('/:id', validate, postController.deleteById);
// postRoute.get('/search', validate, postController.searchByTerm);

module.exports = postRoute;