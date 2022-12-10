const Category = (sequelize, DataTypes) => {
  const Cat = sequelize.define('Category', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
    }, {
    sequelize,
    modelName: 'Category',
    tableName: 'Categories',
    uderscored: true, 
    timestamps: false,
    });
    
  Cat.associate = (models) => {
    Cat.hasMany(models.PostCategory, { foreignKey: 'caegoryId', as: 'category' });
  };

  return Cat;
};
  
  module.exports = Category;