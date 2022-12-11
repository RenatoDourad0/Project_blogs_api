const { User } = require('../models');

const create = async (data) => {
  const { displayName, email, password, image } = data;
  const user = await User.create({ displayName, email, password, image });
  if (user.dataValues) return { type: null, message: user };
  return { type: 400, message: 'fail to create user' };
};

module.exports = {
  create,
};