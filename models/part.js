var fs = require('fs');
var request = require('request');
module.exports = function(sequelize, DataTypes) {
    var Part = sequelize.define('Part', {
        id : {type : DataTypes.INTEGER, autoIncrement : true, primaryKey : true},
        name : DataTypes.STRING,
        description : DataTypes.TEXT,
        status : DataTypes.ENUM('done', 'pending'),
        factory : DataTypes.STRING
    }, {
        classMethods : {
            associate: function(models) {
                Part.hasMany(models.Source);
                Part.hasMany(models.Specification);
            }
        }
    });
    Part.downloadImage = function(uri, filename) {
        request.head(uri, function (err, res, body) {
            request(uri).pipe(fs.createWriteStream('downloads/' + filename));
        })
    };
    return Part;
};