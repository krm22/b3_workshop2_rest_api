'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Requests', {
      id_request: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INT(11)
      },
      title_request: {
        allowNull: false,
        type: Sequelize.VARCHAR(255)
      },
      message_request: {
        allowNull: false,
        type: Sequelize.VARCHAR(255)
      },
      id_user: {
        allowNull: false,
        type: Sequelize.INT(11),
        references:{
          model: 'Users',
          key: 'id_user'
        }
      },
      id_level: {
        allowNull: false,
        type: Sequelize.INT(11),
        references:{
          model: 'Levels',
          key: 'id_level'
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
    return queryInterface.dropTable('Requests');
  }
};