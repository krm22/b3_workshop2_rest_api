'use strict';
module.exports = (sequelize, DataTypes) => {
  var Requests = sequelize.define('Requests', {
    id_request: {type:DataTypes.INTEGER(),
      primaryKey: true,
      autoIncrement: true },
    title_request: DataTypes.STRING(255),
    message_request: DataTypes.STRING(255),
    id_user: DataTypes.INTEGER(11),
    id_level: DataTypes.INTEGER(11)
  }, {});
  Requests.associate = function(models) {
    models.Requests.belongsTo(models.User, {
          foreignKey: {
          allowNull: false
        }
    }),
    models.Requests.belongsTo(models.Level, {
          foreignKey: {
          allowNull: false
        }
    })
  };
  return Requests;
};