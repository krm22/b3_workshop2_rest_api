'use strict';
module.exports = (sequelize, DataTypes) => {
  var Level = sequelize.define('Level', {
    id_level: {type:DataTypes.INTEGER(),
      primaryKey: true,
      autoIncrement: true },
    label_level: DataTypes.STRING(255),
    value_level: DataTypes.INTEGER(11)
  }, {});
  Level.associate = function(models) {
    models.Level.hasMany(models.Requests)
  };
  return Level;
};