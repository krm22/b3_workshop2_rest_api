'use strict';
module.exports = (sequelize, DataTypes) => {
  var Coins = sequelize.define('Coins', {
    id_coin: DataTypes.INT(11),
    label_coin: DataTypes.VARCHAR(255),
    value_coin: DataTypes.INT(11)
  }, {});
  Coins.associate = function(models) {
    // associations can be defined here
  };
  return Coins;
};