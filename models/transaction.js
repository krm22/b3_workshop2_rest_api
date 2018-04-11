'use strict';
module.exports = (sequelize, DataTypes) => {
  var Transaction = sequelize.define('Transaction', {
    value_transaction: DataTypes.INT(11),
    date_transaction: DataTypes.DATETIME,
    id_coach: DataTypes.INT(11),
    id_project: DataTypes.INT(11),
    id_coin: DataTypes.INT(11)
  }, {});
  Transaction.associate = function(models) {

    models.Transaction.belongsTo(models.Coach, {
      foreignKey: {
        allowNull: false
      }
    }),
    models.Transaction.belongsTo(models.Projects, {
      foreignKey: {
        allowNull: false
      }
    }),
    models.Transaction.belongsTo(models.Coins, {
      foreignKey: {
        allowNull: false
      }
    })
  };
  return Transaction;
};