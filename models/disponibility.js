'use strict';
module.exports = (sequelize, DataTypes) => {
  var Disponibility = sequelize.define('Disponibility', {
    id_disponibility: {type:DataTypes.INTEGER(),
      primaryKey: true,
      autoIncrement: true },
    day_disponibility: DataTypes.DATE(),
    timeStart_disponibility: DataTypes.TIME(),
    timeEnd_disponibility: DataTypes.TIME(),
    id_coach: DataTypes.INTEGER(11)
  }, {});
  Disponibility.associate = function(models) {
    models.Disponibility.belongsTo(models.Coach, {
      foreignKey: {
        allowNull: false
      }
     }),
     models.Disponibility.hasMany(models.Meeting)
   };
  return Disponibility;
};