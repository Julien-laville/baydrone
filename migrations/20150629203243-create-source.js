'use strict';

module.exports = {
  up: function (queryInterface, dataTypes) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    queryInterface.createTable('sources',{
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
      },
      url : {
        type : dataTypes.STRING
      },
      price : {
        type : dataTypes.DECIMAL(16,3)
      },
      currency : {
        type : dataTypes.ENUM('dollar', 'euro', 'yuan')
      }
    })

  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    queryInterface.dropTable('collectors')
  }
};
