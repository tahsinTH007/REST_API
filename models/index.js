const { Sequelize , DataTypes} = require("sequelize");
const dbConfig = require('../config/dbConfig');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,{
        host: dbConfig.HOST,
        //--- for stop the query in terminal ---//
        // logging: false,
        dialect: dbConfig.dialect,
        operatorsAliases: false,

        pool:{
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle,
        }
    }
)

sequelize.authenticate()
                .then(() => console.log("Connected..."))
                .catch((err) => console.log(err));

                
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//all models
db.users = require('../models/userModel')(sequelize, DataTypes);
db.posts = require("./postModel")(sequelize, DataTypes);
db.tags = require("./tagsModel")(sequelize, DataTypes);
db.post_tags = require("./postTagsModel")(sequelize, DataTypes);
db.students = require("./studentModel")(sequelize, DataTypes);
db.images = require("./imageModel")(sequelize,DataTypes);
db.videos = require("./videoModel")(sequelize,DataTypes);
db.comments = require("./commentModel")(sequelize,DataTypes);


// scope
db.students.addScope("CheckSection",{
    where:{
        section: "6B"
    }
})

// limit scope
db.students.addScope("limitCheck",{
    limit:2
})

//----one to one association----//
// db.users.hasOne(db.posts, {foreignKey:"user_id"});

//----one to many association----//
db.users.hasMany(db.posts, {foreignKey:"user_id"})

db.posts.belongsTo(db.users, {foreignKey:"user_id"});

//----many to many association----//
db.posts.belongsToMany(db.tags,{through:"post_tags"})
db.tags.belongsToMany(db.posts,{through:"post_tags"})

//------Polymorphic Association-----//
db.images.hasMany(db.comments,{
    foreignKey:"commentableId",
    constraints: false,
    scope:{
        commentableType:"image"
    }
});

db.videos.hasMany(db.comments,{
    foreignKey:"commentableId",
    constraints: false,
    scope:{
        commentableType:"video"
    }
});

db.comments.belongsTo(db.images,{
    foreignKey:"commentableId",
    constraints: false,
});

db.comments.belongsTo(db.videos,{
    foreignKey:"commentableId",
    constraints: false,
});

db.sequelize.sync({force: false})
                .then(() => console.log("Yes re-sync done..."))


module.exports = db;