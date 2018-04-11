'use strict';
module.exports = (sequelize, DataTypes) => {
  var Roles = sequelize.define('Role', {
    id_role: DataTypes.INTEGER(11),
    label_role: DataTypes.STRING(255)
  }, {});
  Roles.associate = function(models) {
    models.Role.hasMany(models.Possesses)
  };
  return Roles;
};