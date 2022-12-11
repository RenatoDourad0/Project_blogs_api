const { userService } = require('../services');

const create = async (req, res, next) => {
  const { displayName, email, password, image } = req.body;
  try {
    const { type, message } = await userService.create({ displayName, email, password, image });
    if (type === null) return next();
    return res.status(400).json({ message });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create,
};