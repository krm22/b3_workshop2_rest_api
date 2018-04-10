'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Transactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      value_transaction: {
        type: Sequelize.INT(11)
      },
      date_transaction: {
        type: Sequelize.DATETIME
      },
      id_coach: {
        type: Sequelize.INT(11)
      },
      id_project: {
        type: Sequelize.INT(11)
      },
      id_coin: {
        type: Sequelize.INT(11)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Transactions');
  }
};