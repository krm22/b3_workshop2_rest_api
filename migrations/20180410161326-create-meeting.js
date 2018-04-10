'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Meetings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      label_meeting: {
        type: Sequelize.VARCHAR(255)
      },
      place_meeting: {
        type: Sequelize.VARCHAR(255)
      },
      id_user: {
        type: Sequelize.INT(11)
      },
      id_coach: {
        type: Sequelize.INT(11)
      },
      id_disponibility: {
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
    return queryInterface.dropTable('Meetings');
  }
};