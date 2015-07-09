module.exports = function(sequelize, DataTypes) {
    var Selector = sequelize.define('Selector', {
        id : {type : DataTypes.INTEGER, autoIncrement : true, primaryKey : true}
    });
    return Selector
};