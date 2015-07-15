module.exports = function(sequelize, DataTypes) {
    var Collector = sequelize.define('Collector', {
        id : {type : DataTypes.INTEGER, autoIncrement : true, primaryKey : true},
        site : {type: DataTypes.TEXT}
    });

    return Collector
};