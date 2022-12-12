const { categoriesService } = require('../services');

const create = async (req, res, next) => {
  const { name } = req.body;
  try {
    const { type, message } = await categoriesService.create(name);
    if (type === null) return res.status(201).json(message);
    return res.status(type).json({ message });
  } catch (error) {
    next(error);
  }
};

const getAll = async (req, res, next) => {
  try {
    const { type, message } = await categoriesService.getAll();
    if (type === null) return res.status(200).json(message);
    return res.status(type).json({ message });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create,
  getAll,
};