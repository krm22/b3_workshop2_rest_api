'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_user: {
        type: Sequelize.INT
      },
      name_user: {
        type: Sequelize.VARCHAR(255)
      },
      firstName_user: {
        type: Sequelize.VARCHAR(255)
      },
      password_user: {
        type: Sequelize.VARCHAR(255)
      },
      email_user: {
        type: Sequelize.VARCHAR(255)
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
    return queryInterface.dropTable('Users');
  }
};