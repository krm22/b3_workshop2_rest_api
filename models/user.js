'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    id_user: DataTypes.INT,
    name_user: DataTypes.VARCHAR(255),
    firstName_user: DataTypes.VARCHAR(255),
    password_user: DataTypes.VARCHAR(255),
    email_user: DataTypes.VARCHAR(255),
    id_coach: DataTypes.INT(11)
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};