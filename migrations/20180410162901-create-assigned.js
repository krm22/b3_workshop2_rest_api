'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Assigneds', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_coach: {
        allowNull: false,
        type: Sequelize.INT(11),
        reference: {
          model: 'Coachs',
          key: 'id_coach'
        }
      },
      id_project: {
        allowNull: false,
        type: Sequelize.INT(11),
        reference: {
          model: 'Projects',
          key: 'id_project'
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
    return queryInterface.dropTable('Assigneds');
  }
};