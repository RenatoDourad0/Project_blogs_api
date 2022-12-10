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
    foreignKey: 'category_id',
    through: PostCat,
    otherKey: 'post_id',
    as: 'category',
    });
    PostCat.belongsToMany(models.BlogPost, { 
      foreignKey: 'post_id',
      through: PostCat,
      otherKey: 'category_id',
      as: 'post',
    });
  };
  return PostCat;
};
  
module.exports = PostCategory;