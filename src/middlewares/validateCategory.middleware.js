const validateCategoryFields = require('../validations/validateCategory');

const validateCategory = async (req, res, next) => {
  const { name } = req.body;
  try {
    const category = { name };
    const { type, message } = validateCategoryFields(category);
    if (type === null) return next();
    return res.status(type).json({ message });
  } catch (error) {
    next(error);
  }
};

module.exports = validateCategory;