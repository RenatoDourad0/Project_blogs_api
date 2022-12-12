const { User, BlogPost, PostCategory, Category, sequelize } = require('../models');

const isCategoriesIdValid = async (categoryIds) => {
  const categories = await Promise.all(categoryIds.map(async (id) => Category.findByPk(id)));
  if (categories
      .every((category) => category !== null && category.dataValues.id)) return true;
  return false;
};

const validateTransaction = (result) => {
  if (result[0] === null || result[1].some((element) => element === null)) {
    return { type: 404, message: 'Fail to create post' };
  }
  if (result[0].dataValues && result[1].every((element) => element.dataValues)) {
    return { type: null, message: result[0].dataValues };
  }
};

const createPostTransaction = async ({ title, content, categoryIds, userId }) => {
  try {
    const result = await sequelize.transaction(async (t) => {
      const post = await BlogPost.create({ title, content, userId }, { transaction: t });
      const categories = await Promise.all(categoryIds
        .map(async (id) => PostCategory
          .create({ postId: post.dataValues.id, categoryId: id }, { transaction: t })));
      return [post, categories];
    });
    return validateTransaction(result);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getById = async (id) => {
  const post = await BlogPost
  .findByPk(id, { include: [
    { model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Category, as: 'categories', through: { model: PostCategory, attributes: [] } },
  ] });
  if (post !== null) return { type: null, message: post.dataValues };
  return { type: 404, message: 'Post does not exist' };
};

const updatePostTransaction = async (id, { title, content, categoryIds, userId }) => {
  try {
    await sequelize.transaction(async (t) => {
      const post = await BlogPost.update(
        { title, content, userId }, { where: { id } }, { transaction: t },
        );
      const categories = await Promise.all(categoryIds
        .map(async (categoryId) => PostCategory.update(
            { postId: id, categoryId },
            { where: { postId: id } }, { transaction: t },
          )));
      return [post, categories];
    });
    const newPost = await getById(id);
    return { type: null, message: newPost.message };
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const create = async ({ title, content, categoryIds, userId }) => {
  const isCategoriesValid = await isCategoriesIdValid(categoryIds);
  if (!isCategoriesValid) return { type: 400, message: 'one or more "categoryIds" not found' };
  return createPostTransaction({ title, content, categoryIds, userId });
};

const getAll = async () => {
  const posts = await BlogPost
    .findAll({ include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { model: PostCategory, attributes: [] } },
    ] });
  if (!posts.length) return { type: 404, message: 'No existing user' };
  if (posts) return { type: null, message: posts };
};

const updateById = async (id, { title, content, categoryIds, userId }) => {
  const isCategoriesValid = await isCategoriesIdValid(categoryIds);
  if (!isCategoriesValid) return { type: 400, message: 'one or more "categoryIds" not found' };
  return updatePostTransaction(id, { title, content, categoryIds, userId });
};

const deleteById = async () => {

};

const searchByTerm = async () => {

};

module.exports = {
  create,
  getAll,
  getById,
  updateById,
  deleteById,
  searchByTerm,
};