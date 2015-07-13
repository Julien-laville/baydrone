module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define('User', {
        id : {type : DataTypes.INTEGER, autoIncrement : true, primaryKey : true},
        login : {type: DataTypes.TEXT}
    });

    User.isLogged  = function(req,res,next) {
        return true;
    };

    return User
};