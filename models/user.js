'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    id_user: DataTypes.INTEGER(),
    name_user: DataTypes.STRING(255),
    firstName_user: DataTypes.STRING(255),
    password_user: DataTypes.STRING(255),
    email_user: DataTypes.STRING(255)
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