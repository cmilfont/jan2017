'use strict';
module.exports = function(sequelize, DataTypes) {
  const Instructor = sequelize.define('Instructor', {
    description: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Instructor.belongsTo(models.Gym);
        Instructor.belongsTo(models.User);
      }
    }
  });
  return Instructor;
};