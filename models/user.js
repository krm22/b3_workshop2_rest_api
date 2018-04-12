'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    id_user: {type:DataTypes.INTEGER(),
    primaryKey: true,
    autoIncrement: true },
    name_user: DataTypes.STRING(255),
    firstName_user: DataTypes.STRING(255),
    password_user: DataTypes.STRING(255),
    email_user: DataTypes.STRING(255),
    bio_user:DataTypes.STRING(255)
  }, { createdAt: false, updatedAt: false});
  User.associate = function(models) {
     models.User.hasMany(models.Access),
     models.User.hasMany(models.Possesses),
     models.User.hasMany(models.Message),
     models.User.hasMany(models.Requests),
     models.User.hasOne(models.Coach, {
       foreignKey: 'id_coach'
     })
     models.User.hasMany(models.Meeting)
  };
  return User;
};