'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id_user:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        allowNull: false
      },
      name_user: {
        type: Sequelize.VARCHAR(255),
        allowNull: false
      },
      firstName_user: {
        type: Sequelize.VARCHAR(255),
        allowNull: false
      },
      password_user: {
        type: Sequelize.VARCHAR(255),
        allowNull: false
      },
      email_user: {
        type: Sequelize.VARCHAR(255),
        allowNull: false
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