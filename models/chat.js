'use strict';
module.exports = (sequelize, DataTypes) => {
  var Chat = sequelize.define('Chat', {
    id_chat: {type:DataTypes.INTEGER(),
      primaryKey: true,
      autoIncrement: true },
    label_chat: DataTypes.STRING(255)
  }, {});
  Chat.associate = function(models) {
    models.Chat.hasMany(models.Message)
  };
  return Chat;
};