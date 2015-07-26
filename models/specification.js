module.exports = function(sequelize, DataTypes) {
    var Specification = sequelize.define('Specification', {
        id : {type : DataTypes.INTEGER, autoIncrement : true, primaryKey : true},
        name : DataTypes.STRING,
        value : DataTypes.STRING
    }, {
        classMethods : {
            associate : function(models) {
                Specification.belongsTo(models.Part)
            }
        }
    });
    return Specification;
};