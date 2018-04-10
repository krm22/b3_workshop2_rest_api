'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Requests', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_request: {
        type: Sequelize.INT(11)
      },
      title_request: {
        type: Sequelize.VARCHAR(255)
      },
      message_request: {
        type: Sequelize.VARCHAR(255)
      },
      id_user: {
        type: Sequelize.INT(11)
      },
      id_level: {
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
    return queryInterface.dropTable('Requests');
  }
};