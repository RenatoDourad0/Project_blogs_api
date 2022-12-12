const { Category } = require('../models');

const create = async (name) => {
  const category = await Category.create({ name });
  if (category === null) return { type: 400, message: 'fail to create category' };
  if (category.dataValues) return { type: null, message: category };
};

const getAll = async () => {
  const categories = await Category.findAll();
  if (!categories.length) return { type: 400, message: 'No existing category' };
  if (categories) return { type: null, message: categories };
};

module.exports = {
  create, 
  getAll,
};