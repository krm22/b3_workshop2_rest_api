'use strict';
module.exports = (sequelize, DataTypes) => {
  var Assigned = sequelize.define('Assigned', {
    id_coach: DataTypes.INT(11),
    id_project: DataTypes.INT(11)
  }, {});
  Assigned.associate = function(models) {
    // associations can be defined here
  };
  return Assigned;
};