'use strict';
module.exports = (sequelize, DataTypes) => {
  var Chat = sequelize.define('Chat', {
    id_chat: DataTypes.INT(11),
    label_chat: DataTypes.VARCHAR(255)
  }, {});
  Chat.associate = function(models) {
    models.Chat.hasMany(models.Messages)
  };
  return Chat;
};