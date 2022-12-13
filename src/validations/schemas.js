const Joi = require('joi');

const userSchema = Joi.object({
  displayName: Joi.string().min(8).required(),
  email: Joi.string().email(),
  password: Joi.string().min(6),
  image: Joi.string(),
}).messages({
  'displayName.min': '"displayName" length must be at least 8 characters long',
  'displayName.required': '"displayName" is required',
  'email.email': '"email" must be a valid email',
  'password.min': '"password" length must be at least 6 characters long',
});

const categorySchema = Joi.object({
  name: Joi.string().required(),
}).messages({
  'name.required': '"name" is required',
});

const postSchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  categoryIds: Joi.array().required(),
}).messages({
  'any.required': 'Some required fields are missing',
  'string.empty': 'Some required fields are missing',
});

const updatedPostSchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  categoryIds: Joi.array(),
}).messages({
  'any.required': 'Some required fields are missing',
  'string.empty': 'Some required fields are missing',
});

module.exports = {
  userSchema,
  categorySchema,
  postSchema,
  updatedPostSchema,
};