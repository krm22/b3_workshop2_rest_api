'use strict';
module.exports = (sequelize, DataTypes) => {
  var Roles = sequelize.define('Role', {
    id_role: {type:DataTypes.INTEGER(),
      primaryKey: true,
      autoIncrement: true },
    label_role: DataTypes.STRING(255)
  }, { tableName: 'roles',
  createdAt: false, 
  updatedAt: false  });
  Roles.associate = function(models) {
    models.Role.belongsToMany(models.User, { 
      as: 'User',
      through: 'Possesses', 
    foreignKey: 'id_role'
  })
  };
  return Roles;
};