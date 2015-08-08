module.exports = function(sequelize, DataTypes) {
    var Craft = sequelize.define('Craft', {
        id : {type : DataTypes.INTEGER, autoIncrement : true, primaryKey : true},
        status : {type : DataTypes.ENUM('draft', 'published')}
    },{
        classMethods : {
            associate: function(models) {
                Craft.hasMany(models.Part)
            }
        }
    });


    return Craft
};