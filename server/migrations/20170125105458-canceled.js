'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.addColumn(
      'Trainings',
      'canceled',
      {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      }
    );
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.removeColumn(
      'Trainings',
      'canceled',
      Sequelize.BOOLEAN
    );
  }
};
