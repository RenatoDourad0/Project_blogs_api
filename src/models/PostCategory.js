const PostCategory = (sequelize, DataTypes) => {
  const PostCat = sequelize.define('PostCategory', {
    postId: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'post_id',
      foreignKey: true,
      primaryKey: true,
    },
    categoryId: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'category_id',
      foreignKey: true,
      primaryKey: true,
    }
    }, {
    sequelize,
    modelName: 'PostCategory',
    tableName: 'posts_categories',
    underscored: true, 
    timestamps: false,
    });
    
  PostCat.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, { 
    foreignKey: 'postId',
    through: PostCat,
    otherKey: 'categoryId',
    as: 'categories',
    });
    models.Category.belongsToMany(models.BlogPost, { 
      foreignKey: 'categoryId',
      through: PostCat,
      otherKey: 'postId',
      as: 'posts',
    });
  };
  return PostCat;
};
  
module.exports = PostCategory;