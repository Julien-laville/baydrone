module.exports = function(sequelize, DataTypes) {
    var Specification = sequelize.define('Specification', {
        id : {type : DataTypes.INTEGER, autoIncrement : true, primaryKey : true},
        name : DataTypes.STRING,
        value : DataTypes.STRING
    });
    return Specification;
};