'use strict';
module.exports = (sequelize, DataTypes) => {
  var Requests = sequelize.define('Requests', {
    id_request: DataTypes.INT(11),
    title_request: DataTypes.VARCHAR(255),
    message_request: DataTypes.VARCHAR(255),
    id_user: DataTypes.INT(11),
    id_level: DataTypes.INT(11)
  }, {});
  Requests.associate = function(models) {
    // associations can be defined here
  };
  return Requests;
};