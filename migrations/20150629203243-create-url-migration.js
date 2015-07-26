'use strict';

module.exports = {
  up: function (queryInterface, dataTypes) {
    /*
     Add altering commands here.
     Return a promise to correctly handle asynchronicity.

     Example:
     return queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    queryInterface.createTable('urls',{
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
      url : {
        type : dataTypes.STRING
      },
      status : {
        type : dataTypes.ENUM('pending', 'done')
      }
    });
  },


  down: function (queryInterface, Sequelize) {
    /*
     Add reverting commands here.
     Return a promise to correctly handle asynchronicity.

     Example:
     return queryInterface.dropTable('users');
     */
    queryInterface.dropTable('urls');
  }
};
