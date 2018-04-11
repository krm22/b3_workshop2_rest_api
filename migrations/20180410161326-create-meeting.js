'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Meetings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      label_meeting: {
        allowNull: false,
        type: Sequelize.VARCHAR(255)
      },
      place_meeting: {
        allowNull: false,
        type: Sequelize.VARCHAR(255)
      },
      id_user: {
        allowNull: false,
        type: Sequelize.INT(11),
        references: {
          model: 'Users',
          key: 'id_user'
        }
      },
      id_coach: {
        allowNull: false,
        type: Sequelize.INT(11),
        references: {
          model: 'Coach',
          key: 'id_coach'
        }
      },
      id_disponibility: {
        allowNull: false,
        type: Sequelize.INT(11),
        references: {
          model: 'Disponibility',
          key: 'id_disponibility'
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
    return queryInterface.dropTable('Meetings');
  }
};