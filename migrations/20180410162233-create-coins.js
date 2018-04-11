'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Coins', {
      id_coin: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INT(11)
      },
      label_coin: {
        allowNull: false,
        type: Sequelize.VARCHAR(255)
      },
      value_coin: {
        allowNull: false,
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
    return queryInterface.dropTable('Coins');
  }
};