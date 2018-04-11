'use strict';
module.exports = (sequelize, DataTypes) => {
  var Assigned = sequelize.define('Assigned', {
    id_coach: DataTypes.INTEGER(11),
    id_project: DataTypes.INTEGER(11)
  }, {});
  Assigned.associate = function(models) {
    // associations can be defined here
    models.Assigned.belongsTo(models.Coach, {
      foreignKey: {
        allowNull: false
      }
    })
    models.Assigned.belongsTo(models.Projects, {
      foreignKey: {
        allowNull: false
      }
    })
  };
  return Assigned;
};