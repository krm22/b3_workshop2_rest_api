'use strict';
module.exports = (sequelize, DataTypes) => {
  var Coach = sequelize.define('Coach', {
    id_coach: DataTypes.INT(11),
    label_coach: DataTypes.VARCHAR(255),
    id_user: DataTypes.INT(11)
  }, {});
  Coach.associate = function(models) {
    // associations can be defined here
  };
  return Coach;
};