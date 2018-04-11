'use strict';
module.exports = (sequelize, DataTypes) => {
  var Messages = sequelize.define('Messages', {
    id_message: DataTypes.INTEGER(11),
    title_message: DataTypes.STRING(255),
    content_message: DataTypes.TEXT,
    id_user: DataTypes.INTEGER(11),
    id_chat: DataTypes.INTEGER(11)
  }, {});
  Messages.associate = function(models) {
    // associations can be defined here
    models.Message.belongsTo(models.Users, {
      foreignKey: {
        allowNull: false
      }
    })
    models.Message.belongsTo(models.Chats, {
      foreignKey: {
        allowNull: false
      }
    })

  };
  return Messages;
}