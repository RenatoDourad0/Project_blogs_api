const { postSchema } = require('./schemas');

const validatePostFields = (post) => {
  const { error } = postSchema.validate(post);
  console.log(error);
  if (error) return { type: 400, message: error.message };
  return { type: null, message: '' };
};

module.exports = validatePostFields;