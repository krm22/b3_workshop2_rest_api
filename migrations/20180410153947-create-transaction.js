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
        allowNull: false,
        type: Sequelize.INTEGER(11)
      },
      date_transaction: {
        allowNull: false,
        type: Sequelize.DATETIME
      },
      id_coach: {
        allowNull: false,
        type: Sequelize.INTEGER(11),
        references: {
          model: 'Coach',
          key: 'id_coach'
        }
      },
      id_project: {
        allowNull: false,
        type: Sequelize.INTEGER(11),
        references: {
          model: 'Projects',
          key: 'id_project'
        }
      },
      id_coin: {
        allowNull: false,
        type: Sequelize.INTEGER(11),
        references: {
          model: 'Coins',
          key: 'id_coin'
        }
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