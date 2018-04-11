'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    id_user: DataTypes.INT,
    name_user: DataTypes.VARCHAR(255),
    firstName_user: DataTypes.VARCHAR(255),
    password_user: DataTypes.VARCHAR(255),
    email_user: DataTypes.VARCHAR(255)
  }, {});
  User.associate = function(models) {
     models.User.hasMany(models.Access),
     models.User.hasMany(models.Possesses),
     models.User.hasMany(models.Messages),
     models.User.hasMany(models.Requests),
     models.User.hasOne(models.Coach, {
       foreignKey: 'id_coach'
     })
     models.User.hasMany(models.Meeting)
  };
  return User;
};