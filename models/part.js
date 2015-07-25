var fs = require('fs');
var request = require('request');
module.exports = function(sequelize, DataTypes) {
    var Part = sequelize.define('Part', {
        id : {type : DataTypes.INTEGER, autoIncrement : true, primaryKey : true},
        name : DataTypes.STRING,
        description : DataTypes.TEXT
    });
    Part.downloadImage = function(uri, filename) {
        request.head(uri, function (err, res, body) {
            console.log('content-type:', res.headers['content-type']);
            console.log('content-length:', res.headers['content-length']);

            request(uri).pipe(fs.createWriteStream('downloads/' + filename));

        })
    };
    return Part;
};