'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Levels', {
      id_level: {
        type: Sequelize.INT(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      label_level: {
        allowNull: false,
        type: Sequelize.VARCHAR(255)
      },
      value_level: {
        allowNull: false,
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
    return queryInterface.dropTable('Levels');
  }
};