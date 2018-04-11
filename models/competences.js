'use strict';
module.exports = (sequelize, DataTypes) => {
  var Competences = sequelize.define('Competences', {
    id_competence: DataTypes.INTEGER(11),
    label_competence: DataTypes.STRING(255)
  }, {});
  Competences.associate = function(models) {
    models.Competences.hasMany(models.Coach)
  };
  return Competences;
};