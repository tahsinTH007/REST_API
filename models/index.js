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

db.users = require('../models/userModel')(sequelize, DataTypes);
// db.users = sequelize.model.User;

db.sequelize.sync({force: false})
                .then(() => console.log("Yes re-sync done..."))


module.exports = db;