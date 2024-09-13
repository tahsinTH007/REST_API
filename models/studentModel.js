module.exports = (sequelize, DataTypes) => {
    const Students = sequelize.define("students",{
        name:DataTypes.STRING,
        email: DataTypes.STRING,
        passwrod: DataTypes.STRING
    },{
        sequelize,
        paranoid: true
    })
    return Students;
}