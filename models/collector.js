module.exports = function(sequelize, DataTypes) {
    var Collector = sequelize.define('Collector', {
        id : {type : DataTypes.INTEGER, autoIncrement : true, primaryKey : true},
        site : {type: DataTypes.TEXT},
        status : {type : DataTypes.ENUM('idle', 'working')}
    },{
        classMethods : {
            associate: function(models) {
                Collector.hasMany(models.Url)
            }
        }
    });


    return Collector
};