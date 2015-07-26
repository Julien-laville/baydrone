module.exports = function(sequelize, DataTypes) {
    var Url = sequelize.define('Url', {
        id : {type : DataTypes.INTEGER, autoIncrement : true, primaryKey : true},
        status : DataTypes.ENUM('pending', 'done'),
        url : DataTypes.STRING
    },{
    classMethods : {
        associate: function (models) {
            Url.belongsTo(models.Collector)
        }
    }});
    return Url;
};