'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Messages', {
      id_message: {
        type: Sequelize.INT(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      title_message: {
        allowNull: false,
        type: Sequelize.VARCHAR(255)
      },
      content_message: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      id_user: {
        allowNull: false,
        type: Sequelize.INT(11),
        references:{
          model:'Users',
          key: 'id_user'
        }
      },
      id_chat: {
        allowNull: false,
        type: Sequelize.INT(11),
        references:{
          model:'Chats',
          key: 'id_user'
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
    return queryInterface.dropTable('Messages');
  }
};