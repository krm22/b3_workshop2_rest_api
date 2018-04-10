'use strict';
module.exports = (sequelize, DataTypes) => {
  var Messages = sequelize.define('Messages', {
    id_message: DataTypes.INT(11),
    title_message: DataTypes.VARCHAR(255),
    content_message: DataTypes.TEXT,
    id_user: DataTypes.INT(11),
    id_chat: DataTypes.INT(11)
  }, {});
  Messages.associate = function(models) {
    // associations can be defined here
  };
  return Messages;
};