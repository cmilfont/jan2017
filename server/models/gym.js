'use strict';
module.exports = function(sequelize, DataTypes) {
  const Gym = sequelize.define('Gym', {
    lat: DataTypes.STRING,
    lng: DataTypes.STRING,
    description: DataTypes.STRING,
    address: DataTypes.STRING,
    tel: DataTypes.STRING,
    site: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Gym.hasMany(models.Training);
        Gym.hasMany(models.Instructor);
      }
    }
  });
  return Gym;
};