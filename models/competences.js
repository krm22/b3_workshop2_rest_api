'use strict';
module.exports = (sequelize, DataTypes) => {
  var Competences = sequelize.define('Competences', {
    id_competence: {type:DataTypes.INTEGER(),
      primaryKey: true,
      autoIncrement: true },
    label_competence: DataTypes.STRING(255)
  }, {});
  Competences.associate = function(models) {
    models.Competences.hasMany(models.Coach)
  };
  return Competences;
};