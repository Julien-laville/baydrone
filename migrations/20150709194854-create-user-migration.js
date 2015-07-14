'use strict';

module.exports = {
    up: function (queryInterface, dataTypes) {
        queryInterface.createTable('users', {
            createdAt: {
                type: dataTypes.DATE
            },
            updatedAt: {
                type: dataTypes.DATE
            },
            id: {
                type: dataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                unsigned: true
            },
            login: {
                type: dataTypes.STRING
            }
        });

    },

    down: function (queryInterface, Sequelize) {
        queryInterface.dropTable('users');
    }
};
