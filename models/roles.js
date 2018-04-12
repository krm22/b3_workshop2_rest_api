'use strict';
module.exports = (sequelize, DataTypes) => {
  var Roles = sequelize.define('Role', {
    id_role: {type:DataTypes.INTEGER(),
      primaryKey: true,
      autoIncrement: true },
    label_role: DataTypes.STRING(255)
  }, {});
  Roles.associate = function(models) {
    models.Role.hasMany(models.Possesses)
  };
  return Roles;
};