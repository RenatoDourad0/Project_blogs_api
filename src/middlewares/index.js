const errorMiddleware = require('./error.middleware');
const { validateNewUser } = require('./validateUser.middleware');
const validateCategory = require('./validateCategory.middleware');
const validatePost = require('./validatePost.middleware');

module.exports = {
  errorMiddleware,
  validateNewUser,
  validateCategory,
  validatePost,
};