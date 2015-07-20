var fs = require('fs');
var request = require('request');
module.exports = function(sequelize, DataTypes) {
    var Part = sequelize.define('Part', {
        id : {type : DataTypes.INTEGER, autoIncrement : true, primaryKey : true},
        name : DataTypes.STRING,
        description : DataTypes.TEXT
    });
    Part.downloadImage = function(uri) {

    };
    return Part;
};