'use strict';
module.exports = (sequelize, DataTypes) => {
  var Access = sequelize.define('Access', {
    id_user: DataTypes.INTEGER(11),
    id_project: DataTypes.INTEGER(11)
  }, {});
  Access.associate = function(models) {
    models.Access.hasMany(models.Users)
    models.Access.hasMany(models.Projects)
  };
  return Access;
};
