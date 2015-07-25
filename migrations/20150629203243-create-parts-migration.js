'use strict';

module.exports = {
  up: function (queryInterface, dataTypes) {
    /*
     Add altering commands here.
     Return a promise to correctly handle asynchronicity.

     Example:
     return queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    queryInterface.createTable('parts',{
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
      description : {
        type : dataTypes.TEXT
      }
    });
    queryInterface.createTable('part_tags', {
      partId: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        unsigned: true
      },
      tagId: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        unsigned: true
      }
    });
    queryInterface.createTable('part_sources', {
      partId: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        unsigned: true
      },
      sourceId: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        unsigned: true
      }
    });
    queryInterface.createTable('part_pictures', {
      partId: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        unsigned: true
      },
      pictureId: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        unsigned: true
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
    queryInterface.dropTable('parts');
    queryInterface.dropTable('part_tags');
    queryInterface.dropTable('part_pictures');
    queryInterface.dropTable('part_sources');

  }
};
