const { categorySchema } = require('./schemas');

const validateCategoryFields = (category) => {
  const { error } = categorySchema.validate(category);
  if (error) return { type: 400, message: error.message };
  return { type: null, message: '' };
};

module.exports = validateCategoryFields;