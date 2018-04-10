'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Disponibilities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_disponibility: {
        type: Sequelize.INT(11)
      },
      day_disponibility: {
        type: Sequelize.DATE
      },
      timeStart_disponibility: {
        type: Sequelize.TIME
      },
      timeEnd_disponibility: {
        type: Sequelize.TIME
      },
      id_coach: {
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
    return queryInterface.dropTable('Disponibilities');
  }
};