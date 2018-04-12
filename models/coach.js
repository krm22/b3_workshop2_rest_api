'use strict';
module.exports = (sequelize, DataTypes) => {
  var Coach = sequelize.define('Coach', {
    id_coach: {type:DataTypes.INTEGER(),
    primaryKey: true,
    autoIncrement: true },
    label_coach: DataTypes.STRING(255),
    id_user: DataTypes.INTEGER(11),
    id_competence: DataTypes.INTEGER(11)
  }, { tableName: 'coach',
       createdAt: false, 
       updatedAt: false },);
  Coach.associate = function(models) {
   models.Coach.hasMany(models.Assigned),
   models.Coach.belongsTo(models.Competences,{
     foreignKey: {
       allowNull: false
     }
   })
   models.Coach.hasMany(models.Disponibility),
   models.Coach.hasMany(models.Meeting),
   models.Coach.hasMany(models.Transaction),
   models.Coach.belongsTo(models.User, {
    foreignKey: {
      allowNull: false
     }
   })
  }
  return Coach;
};