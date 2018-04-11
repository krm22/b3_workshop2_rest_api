'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Requests', {
      id_request: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(11)
      },
      title_request: {
        allowNull: false,
        type: Sequelize.STRING(255)
      },
      message_request: {
        allowNull: false,
        type: Sequelize.STRING(255)
      },
      id_user: {
        allowNull: false,
        type: Sequelize.INTEGER(11),
        references:{
          model: 'Users',
          key: 'id_user'
        }
      },
      id_level: {
        allowNull: false,
        type: Sequelize.INTEGER(11),
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