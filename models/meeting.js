'use strict';
module.exports = (sequelize, DataTypes) => {
  var Meeting = sequelize.define('Meeting', {
    label_meeting: DataTypes.VARCHAR(255),
    place_meeting: DataTypes.VARCHAR(255),
    id_user: DataTypes.INT(11),
    id_coach: DataTypes.INT(11),
    id_disponibility: DataTypes.INT(11)
  }, {});
  Meeting.associate = function(models) {
    models.Meeting.belongsTo(models.Users,{
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