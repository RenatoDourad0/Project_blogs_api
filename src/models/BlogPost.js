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
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'user_id',
      foreignKey: true,
    },
    published: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updated: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    }, {
    sequelize,
    modelName: 'BlogPost',
    tableName: 'blog_posts',
    underscored: true, 
    timestamps: true,
    updatedAt: 'updated',
    createdAt: 'published'
    });
    Post.associate = (models) => {
      Post.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
      Post.hasOne(models.PostCategory, { foreignKey: 'postId', as: 'category' });
  };
  
  return Post;
};
  
  module.exports = BlogPost;