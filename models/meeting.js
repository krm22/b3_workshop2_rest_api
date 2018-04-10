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
    // associations can be defined here
  };
  return Meeting;
};