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
  const { id } = req.params;
  try {
    const { type, message } = await postService.getById(id);
    if (type === null) return res.status(200).json(message);
    return res.status(type).json({ message });
  } catch (error) {
    next(error);
  }
};

const updateById = async (req, res, next) => {
  const { user } = req;
  const { title, content, categoryIds } = req.body;
  const { id } = req.params;
  try {
    const { type: invalidId, message: originalPost } = await postService.getById(id);
    if (invalidId || user.id !== originalPost.user.id) {
      return res.status(401).json({ message: 'Unauthorized user' });
    }
    const { type, message } = await postService
      .updateById(id, { title, content, categoryIds, userId: user.id });
    if (type === null) return res.status(200).json(message);
    return res.status(type).json({ message });
  } catch (error) {
    next(error);
  }
};

// const deleteById = async (req, res, next) => {

// };

// const searchByTerm = async (req, res, next) => {

// };

module.exports = {
  create,
  getAll,
  getById,
  updateById,
  // deleteById,
  // searchByTerm,
};