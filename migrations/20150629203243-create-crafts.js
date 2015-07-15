'use strict';

module.exports = {
  up: function (queryInterface, dataTypes) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    queryInterface.createTable('crafts',{
      createdAt: {
        type: dataTypes.DATE
      },
      updatedAt: {
        type: dataTypes.DATE
      },
      id : {
        type : dataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true,
        unsigned : true
      },
      name : {
        type : dataTypes.STRING
      }
    });

    queryInterface.createTable('craft_part', {
      craft_id : {
        type: dataTypes.INTEGER,
        primaryKey: true,
        unsigned: true
      },
      part_id : {
        type: dataTypes.INTEGER,
        primaryKey: true,
        unsigned: true
      }
    })

  },

  down: function (queryInterface, Sequelize) {
    queryInterface.dropTable('crafts');
    queryInterface.dropTable('craft_part');
  }
};
