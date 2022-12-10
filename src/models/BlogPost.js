const BlogPost = (sequelize, DataTypes) => {
  const Post = sequelize.define('BlogPost', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'user_id',
      foreignKey: true,
    },
    published: {
      allowNull: false,
      field: 'created_at',
      type: DataTypes.DATE,
    },
    updated: {
      allowNull: false,
      field: 'updated_at',
      type: DataTypes.DATE,
    }
    }, {
    sequelize,
    modelName: 'BlogPost',
    tableName: 'blog_posts',
    uderscored: true, 
    timestamps: true,
    });
    Post.associate = (models) => {
      Post.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
      Post.hasOne(models.PostCategory, { foreignKey: 'post_id', as: 'category' })
  };
  
  return Post;
};
  
  module.exports = BlogPost;