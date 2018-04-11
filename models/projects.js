'use strict';
module.exports = (sequelize, DataTypes) => {
  var Projects = sequelize.define('Projects', {
    id_project: DataTypes.INTEGER(11),
    name_project: DataTypes.STRING(255)
  }, {});
  Projects.associate = function(models) {
    models.Projects.hasMany(models.Transaction),
    models.Projects.hasMany(models.Access)
  };
  return Projects;
};