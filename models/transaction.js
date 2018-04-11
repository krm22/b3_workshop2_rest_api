'use strict';
module.exports = (sequelize, DataTypes) => {
  var Transaction = sequelize.define('Transaction', {
    value_transaction: DataTypes.INTEGER(11),
    date_transaction: DataTypes.DATE(),
    id_coach: DataTypes.INTEGER(11),
    id_project: DataTypes.INTEGER(11),
    id_coin: DataTypes.INTEGER(11)
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