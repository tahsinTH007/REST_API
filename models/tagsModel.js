module.exports = (sequelize, DataTypes) => {
    const Tags = sequelize.define( "tags",{
        name: DataTypes.STRING,
    },{
        createdAt: 'create at',
        updatedAt: 'modified_at',
    });
   return Tags;
}