module.exports = function(sequelize, DataTypes) {
    var Source = sequelize.define('Source', {
        id : {type : DataTypes.INTEGER, autoIncrement : true, primaryKey : true},
        name : DataTypes.STRING,
        url : DataTypes.TEXT
    });
    return Source;
};