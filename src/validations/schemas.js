const Joi = require('joi');

const userSchema = Joi.object({
  displayName: Joi.string().min(8).required(),
  email: Joi.string().email(),
  password: Joi.string().min(6),
  image: Joi.string(),
}).messages({
  'displayName.min': '"displayName" length must be at least 8 characters long',
  'displayName.required': '"displayName" is reuired',
  'email.email': '"email" must be a valid email',
  'password.min': '"password" length must be at least 6 characters long',
});

module.exports = {
  userSchema,
};