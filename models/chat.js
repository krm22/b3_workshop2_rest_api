'use strict';
module.exports = (sequelize, DataTypes) => {
  var Chat = sequelize.define('Chat', {
    id_chat: DataTypes.INTEGER(11),
    label_chat: DataTypes.STRING(255)
  }, {});
  Chat.associate = function(models) {
    models.Chat.hasMany(models.Messages)
  };
  return Chat;
};