const { userService } = require('../services');

const create = async (req, res, next) => {
  const { displayName, email, password, image } = req.body;
  try {
    const { type, message } = await userService.create({ displayName, email, password, image });
    if (type === null) return next();
    return res.status(type).json({ message });
  } catch (error) {
    next(error);
  }
};

const getAll = async (req, res, next) => {
  try {
    const { type, message } = await userService.getAll();
    if (type === null) return res.status(200).json(message);
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { type, message } = await userService.getById(id);
    if (type === null) return res.status(200).json(message);
    return res.status(type).json({ message });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create,
  getAll,
  getById,
};