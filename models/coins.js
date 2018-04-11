'use strict';
module.exports = (sequelize, DataTypes) => {
  var Coins = sequelize.define('Coins', {
    id_coin: DataTypes.INTEGER(11),
    label_coin: DataTypes.STRING(255),
    value_coin: DataTypes.INTEGER(11)
  }, {});
  Coins.associate = function(models) {
    models.Coins.hasMany(models.Transaction)
  };
  return Coins;
};