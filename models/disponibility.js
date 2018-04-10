'use strict';
module.exports = (sequelize, DataTypes) => {
  var Disponibility = sequelize.define('Disponibility', {
    id_disponibility: DataTypes.INT(11),
    day_disponibility: DataTypes.DATE,
    timeStart_disponibility: DataTypes.TIME,
    timeEnd_disponibility: DataTypes.TIME,
    id_coach: DataTypes.INT(11)
  }, {});
  Disponibility.associate = function(models) {
    // associations can be defined here
  };
  return Disponibility;
};