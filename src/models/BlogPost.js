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
    underscored: true, 
    timestamps: true,
    });
    Post.associate = (models) => {
      Post.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
      Post.hasOne(models.PostCategory, { foreignKey: 'postId', as: 'category' })
  };
  
  return Post;
};
  
  module.exports = BlogPost;