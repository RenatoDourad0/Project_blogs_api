const errorMiddleware = require('./error.middleware');
const { validateNewUser } = require('./validateUser.middleware');

module.exports = {
  errorMiddleware,
  validateNewUser,
};