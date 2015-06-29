

module.exports = function(sequelize, DataTypes) {
    var Part = sequelize.define('Part', {
        id : DataTypes.INTEGER,
        name : DataTypes.STRING
    });
    return Part;
};