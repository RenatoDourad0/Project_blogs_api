const { updatedPostSchema } = require('./schemas');

const validateUpdatedPostFields = (post) => {
  const { error } = updatedPostSchema.validate(post);
  console.log(error);
  if (error) return { type: 400, message: error.message };
  return { type: null, message: '' };
};

module.exports = validateUpdatedPostFields;