'use strict';
module.exports = (sequelize, DataTypes) => {
  var Level = sequelize.define('Level', {
    id_level: DataTypes.INT(11),
    label_level: DataTypes.VARCHAR(255),
    value_level: DataTypes.INT(11)
  }, {});
  Level.associate = function(models) {
    models.Level.hasMany(models.Requests)
  };
  return Level;
};