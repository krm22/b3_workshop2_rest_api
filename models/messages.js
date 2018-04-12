'use strict';
module.exports = (sequelize, DataTypes) => {
  var Messages = sequelize.define('Message', {
    id_message: {type:DataTypes.INTEGER(),
      primaryKey: true,
      autoIncrement: true },
    title_message: DataTypes.STRING(255),
    content_message: DataTypes.TEXT,
    id_user: DataTypes.INTEGER(11),
    id_chat: DataTypes.INTEGER(11)
  }, {});
  Messages.associate = (models) => {
    // associations can be defined here
    models.Message.belongsTo(models.User)
    models.Message.belongsTo(models.Chat, {
      foreignKey: {
        allowNull: false
      }
    })

  };
  return Messages;
}