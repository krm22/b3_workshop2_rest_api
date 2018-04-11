'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Accesses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_user: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        references:{
          model: 'Users',
          key:'id_user'
        }
      },
      id_project: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        references:{
          model: 'Projects',
          key:'id_project'
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
    return queryInterface.dropTable('Accesses');
  }
};