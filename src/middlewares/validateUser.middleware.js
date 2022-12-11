const { validateUserFields, validateUniqueEmail } = require('../validations/validateUser');

const validateNewUser = async (req, res, next) => {
  const { displayName, email, password, image } = req.body;
  try {
    const { type, message } = validateUserFields({ displayName, email, password, image });
    if (type) return res.status(type).json({ message });

    const { type: type2, message: message2 } = await validateUniqueEmail(email);
    if (type2) return res.status(type2).json({ message: message2 });

    return next();
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  validateNewUser,
};