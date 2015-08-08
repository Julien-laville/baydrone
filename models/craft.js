module.exports = function(sequelize, DataTypes) {
    var Craft = sequelize.define('Craft', {
        id : {type : DataTypes.INTEGER, autoIncrement : true, primaryKey : true},
        status : {type : DataTypes.ENUM('draft', 'published')},
        name : {type : DataTypes.STRING},
        description : {type : DataTypes.TEXT},
        upCount : {type : DataTypes.INTEGER},
        downCount : {type : DataTypes.INTEGER}
    },{
        classMethods : {
            associate: function(models) {
                Craft.hasMany(models.Part)
            }
        }
    });
    return Craft
};