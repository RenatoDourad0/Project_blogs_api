const PostCategory = (sequelize, DataTypes) => {
  const PostCat = sequelize.define('PostCategory', {
    post_id: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'post_id',
      foreignKey: true,
      primaryKey: true,
    },
    category_id: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'category_id',
      foreignKey: true,
      primaryKey: true,
    }
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