const hashedPassword = require("../src/hashPassword")

module.exports = (sequelize, DataTypes) => {
    const Students = sequelize.define("students",{
        name:DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING
    }
    // ,{
    //     sequelize,
    //     paranoid: true
    // }

    ,{
        hooks:{
            beforeValidate: async (student,options) => {
                  const hasspass = hashedPassword(student.password);
                student.password = hasspass;
            },
            afterValidate:(student, options) =>{
                student.name = "tanvin hassan"
            }
        }
    }
    )
    return Students;
}