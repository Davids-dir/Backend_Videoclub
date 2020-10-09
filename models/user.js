'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    name: {
    type: DataTypes.STRING,
    allowNull: false
    },
    last_names: {
    type: DataTypes.STRING,
    allowNull: false
    },
    email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
    },
    password: {
    tyep: DataTypes.STRING,
    allowNull: false
    },
    active_account: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};