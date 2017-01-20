'use strict';
module.exports = function(sequelize, DataTypes) {
  const Participant = sequelize.define('Participant', {
    status: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        Participant.belongsTo(models.User);
        Participant.belongsTo(models.Training);
      }
    }
  });
  return Participant;
};