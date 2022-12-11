const { userSchema } = require('./schemas');
const { User } = require('../models');

const validateUserFields = (user) => {
  const { error } = userSchema.validate(user);
  if (error) return { type: 400, message: error.message };
  return { type: null, message: '' };
};

const validateUniqueEmail = async (email) => {
  const checkRegisteredEmail = await User.findOne({ where: { email } });
  if (checkRegisteredEmail === null) return { type: null, message: '' };
  return { type: 409, message: 'User already registered' };
};

module.exports = {
  validateUserFields,
  validateUniqueEmail,
};