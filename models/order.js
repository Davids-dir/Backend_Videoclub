'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo (models.User);
      this.belongsToMany (models.Movie, {through: models.OrderMovie});
    }
  };
  Order.init({
    user_id: DataTypes.INTEGER,
    movie_id: DataTypes.INTEGER,
    return_date: DataTypes.DATE

  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};