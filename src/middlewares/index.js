const errorMiddleware = require('./error.middleware');
const { validateNewUser } = require('./validateUser.middleware');
const validateCategory = require('./validateCategory.middleware');
const validatePost = require('./validatePost.middleware');
const updatePostValidation = require('./updatePostValidation.middleware');

module.exports = {
  errorMiddleware,
  validateNewUser,
  validateCategory,
  validatePost,
  updatePostValidation,
};