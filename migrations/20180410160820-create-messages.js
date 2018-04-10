'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Messages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_message: {
        type: Sequelize.INT(11)
      },
      title_message: {
        type: Sequelize.VARCHAR(255)
      },
      content_message: {
        type: Sequelize.TEXT
      },
      id_user: {
        type: Sequelize.INT(11)
      },
      id_chat: {
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
    return queryInterface.dropTable('Messages');
  }
};