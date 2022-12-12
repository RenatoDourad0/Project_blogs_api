const { User } = require('../models');

const create = async (data) => {
  const { displayName, email, password, image } = data;
  const user = await User.create({ displayName, email, password, image });
  if (user === null) return { type: 400, message: 'fail to create user' };
  if (user.dataValues) return { type: null, message: user.dataValues };
};

const getAll = async () => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });
  if (!users.length) return { type: 404, message: 'No existing user' };
  if (users) return { type: null, message: users };
};

const getByEmail = async (email) => {
  const user = await User.findOne({ where: { email } });
  if (user === null) return { type: 404, message: 'User does not exist' };
  if (user.dataValues) return { type: null, message: user.dataValues };
};

const getById = async (id) => {
  const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });
  if (user === null) return { type: 404, message: 'User does not exist' };
  if (user.dataValues) return { type: null, message: user.dataValues };
};

module.exports = {
  create,
  getAll,
  getByEmail,
  getById,
};