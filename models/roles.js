'use strict';
module.exports = (sequelize, DataTypes) => {
  var Roles = sequelize.define('Roles', {
    id_role: DataTypes.INT(11),
    label_role: DataTypes.VARCHAR(255)
  }, {});
  Roles.associate = function(models) {
    // associations can be defined here
  };
  return Roles;
};