'use strict';
module.exports = (sequelize, DataTypes) => {
  var Meeting = sequelize.define('Meeting', {
    id:{type:DataTypes.INTEGER(),
      primaryKey: true,
      autoIncrement: true },
    label_meeting: DataTypes.STRING(255),
    place_meeting: DataTypes.STRING(255),
    id_user: DataTypes.INTEGER(11),
    id_coach: DataTypes.INTEGER(11),
    id_disponibility: DataTypes.INTEGER(11)
  }, {});
  Meeting.associate = function(models) {
    models.Meeting.belongsTo(models.User,{
      foriegnKey: {
        allowNull: false
      }
    }),
    models.Meeting.belongsTo(models.Coach,{
      foriegnKey: {
        allowNull: false
      }
    }),
    models.Meeting.belongsTo(models.Disponibility,{
      foriegnKey: {
        allowNull: false
      }
    })
  };
  return Meeting;
};