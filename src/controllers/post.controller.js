const { postService } = require('../services');

const create = async (req, res, next) => {
  const { user } = req;
  const { title, content, categoryIds } = req.body;
  try {
    const { type, message } = await postService
      .create({ title, content, categoryIds, userId: user.id });
    if (type === null) return res.status(201).json(message);
    return res.status(type).json({ message });
  } catch (error) {
    next(error);
  }
};

const getAll = async (req, res, next) => {
  try {
    const { type, message } = await postService.getAll();
    if (type === null) return res.status(200).json(message);
    return res.status(type).json({ message });
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {

};

const updateById = async (req, res, next) => {

};

const deleteById = async (req, res, next) => {

};

const searchByTerm = async (req, res, next) => {

};

module.exports = {
  create,
  getAll,
  getById,
  updateById,
  deleteById,
  searchByTerm,
};