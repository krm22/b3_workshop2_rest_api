'use strict';
module.exports = (sequelize, DataTypes) => {
  var Coach = sequelize.define('Coach', {
    id_coach: DataTypes.INT(11),
    label_coach: DataTypes.VARCHAR(255),
    id_user: DataTypes.INT(11),
    id_competence: DataTypes.INT(11)
  }, {});
  Coach.associate = function(models) {
   models.Coach.hasMany(models.Assigned),
   models.Coach.belongsTo(models.Competences,{
     foriegnKey: {
       allowNull: false
     }
   })
   models.Coach.hasMany(models.Disponibility),
   models.Coach.hasMany(models.Meetings),
   models.Coach.hasMany(models.Transactions),
   models.Coach.belongsTo(models.Users, {
    foriegnKey: {
      allowNull: false
     }
   })
  }
  return Coach;
};