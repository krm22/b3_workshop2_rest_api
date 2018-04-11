'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Competences', {
      id_competence: {
        type: Sequelize.INT(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      label_competence: {
        allowNull: false,
        type: Sequelize.VARCHAR(255)
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
    return queryInterface.dropTable('Competences');
  }
};