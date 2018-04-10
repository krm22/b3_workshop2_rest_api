'use strict';
module.exports = (sequelize, DataTypes) => {
  var Possesses = sequelize.define('Possesses', {
    id_user: DataTypes.INT(11),
    id_role: DataTypes.INT(11)
  }, {});
  Possesses.associate = function(models) {
    // associations can be defined here
  };
  return Possesses;
};