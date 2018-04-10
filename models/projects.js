'use strict';
module.exports = (sequelize, DataTypes) => {
  var Projects = sequelize.define('Projects', {
    id_project: DataTypes.INT(11),
    name_project: DataTypes.VARCHAR(255)
  }, {});
  Projects.associate = function(models) {
    // associations can be defined here
  };
  return Projects;
};