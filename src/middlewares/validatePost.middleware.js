const validatePostFields = require('../validations/validatePost');

const validatePost = async (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  try {
    const { type, message } = validatePostFields({ title, content, categoryIds });
    if (type === null) return next();
    return res.status(type).json({ message });
  } catch (error) {
    next(error);
  }
};

module.exports = validatePost;