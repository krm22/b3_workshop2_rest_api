'use strict';
module.exports = (sequelize, DataTypes) => {
  var Possesses = sequelize.define('Possesses', {
    id_user: DataTypes.INTEGER(11),
    id_role: DataTypes.INTEGER(11)
  }, {});
  Possesses.associate = function(models) {
    models.Possesses.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    }),
    models.Possesses.belongsTo(models.Role, {
      foreignKey: {
        allowNull: false
      }
    })
  };
  return Possesses;
};