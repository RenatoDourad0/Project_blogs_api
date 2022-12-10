const PostCategory = (sequelize, DataTypes) => {
  const PostCat = sequelize.define('PostCategory', {
    }, {
    sequelize,
    modelName: 'PostCategory',
    tableName: 'Post_categories',
    uderscored: true, 
    timestamps: false,
    });
    
  PostCat.associate = (models) => {
    PostCat.belongsToMany(models.Category, { 
    foreignKey: 'categoryId',
    through: PostCat,
    otherKey: 'postId',
    as: 'category',
    });
    PostCat.belongsToMany(models.BlogPost, { 
      foreignKey: 'postId',
      through: PostCat,
      otherKey: 'categoryId',
      as: 'post',
    });
  };
  return PostCat;
};
  
module.exports = PostCategory;