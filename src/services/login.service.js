const { User } = require('../models');

const getByEmail = async (email) => {
  try {
    const user = await User.findOne({ where: { email } });
    if (user.dataValues) return { type: null, message: user.dataValues };
    return { type: 404, message: 'user not found' };
  } catch (error) {
    return { type: error.statusCode, message: error.message };
  }
};

const getById = async (id) => {
  try {
    const user = await User.findByPk(id);
    if (user.dataValues) return { type: null, message: user.dataValues };
    return { type: 404, message: 'user not found' };
  } catch (error) {
    return { type: error.statusCode, message: error.message };
  }
};

module.exports = {
  getByEmail,
  getById,
};