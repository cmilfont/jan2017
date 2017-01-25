'use strict';
module.exports = function(sequelize, DataTypes) {
  const Training = sequelize.define('Training', {
    style: DataTypes.STRING,
    team: DataTypes.STRING,
    date: DataTypes.DATE,
    canceled: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        Training.belongsTo(models.Instructor);
        Training.belongsTo(models.Gym);
        Training.hasMany(models.Participant);
      }
    }
  });
  return Training;
};
