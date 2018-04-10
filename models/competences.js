'use strict';
module.exports = (sequelize, DataTypes) => {
  var Competences = sequelize.define('Competences', {
    id_competence: DataTypes.INT(11),
    label_competence: DataTypes.VARCHAR(255)
  }, {});
  Competences.associate = function(models) {
    // associations can be defined here
  };
  return Competences;
};