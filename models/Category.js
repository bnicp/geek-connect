const { Model, DataTypes } = require('sequelize');
<<<<<<< HEAD
const sequelize = require('../config/connections');
=======
const sequelize = require('../config/connection.js');
>>>>>>> abdbfb6e2364086fcdf48e95bf52dd0dcb679f44

class Category extends Model {}

Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
