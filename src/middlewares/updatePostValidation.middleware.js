const validateUpdatedPostFields = require('../validations/validateUpdatedPostFields');

const updatePostValidation = async (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  try {
    const { type, message } = validateUpdatedPostFields({ title, content, categoryIds });
    if (type === null) return next();
    return res.status(type).json({ message });
  } catch (error) {
    next(error);
  }
};

module.exports = updatePostValidation;