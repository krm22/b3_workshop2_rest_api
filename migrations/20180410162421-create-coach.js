'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Coaches', {
      id_coach: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INT(11)
      },
      label_coach: {
        allowNull: true,
        type: Sequelize.VARCHAR(255)
      },
      id_user: {
        allowNull: false,
        type: Sequelize.INT(11),
        references: 'Users',
        key: 'id_users' 
      },
      id_competences: {
        allowNull: false,
        type: Sequelize.INT(11),
        references: {
          model: 'Competences',
          key: 'id_competences'
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
    return queryInterface.dropTable('Coaches');
  }
};