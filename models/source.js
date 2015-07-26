module.exports = function(sequelize, DataTypes) {
    var Source = sequelize.define('Source', {
        id : {type : DataTypes.INTEGER, autoIncrement : true, primaryKey : true},
        name : DataTypes.STRING,
        url : DataTypes.TEXT,
        price : DataTypes.DECIMAL(16,3),
        currency : DataTypes.ENUM('dollar', 'euro', 'yuan')
    },{
    classMethods : {
        associate: function (models) {
            Source.belongsTo(models.Part)
        }
    }});
    return Source;
};