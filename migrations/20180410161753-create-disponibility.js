'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Disponibilities', {
      id_disponibility: {
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER(11)
      },
      day_disponibility: {
        allowNull: false,
        type: Sequelize.DATE
      },
      timeStart_disponibility: {
        allowNull: false,
        type: Sequelize.TIME
      },
      timeEnd_disponibility: {
        allowNull: false,
        type: Sequelize.TIME
      },
      id_coach: {
        allowNull: false,
        type: Sequelize.INTEGER(11),
        references: {
          model: 'Coach',
          key: 'id_coach'
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
    return queryInterface.dropTable('Disponibilities');
  }
};