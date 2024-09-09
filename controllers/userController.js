const { Sequelize,where, col, Op } = require('sequelize');
const db = require('../models/index');


// create main model
const User = db.users;

// main work

// work create user
const createUser = async (req, res) => {
   try {
    let info = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    }

    const user = await User.create(info);
    res.status(200).send(user);

   } catch (error) {
    console.log(error);
    res.sendStatus(400);
   }

}

// find all user
const getAllUsers = async (req, res) => {
    try {
        const user = await User.findAll({
            attributes:[
               'id',
               'username',
               'email'
            ],
        });
        res.status(200).json(user);
    } catch (error) {
        console.log(error);
    }
}

// get one user
const getOneUser = async (req, res) => {
   try {
    const { id } = req.params;

    const user = await User.findOne({
        where:{
            id: id,
        },
        attributes:[
            'id',
            'username',
            'email'
         ],
    })
    res.status(200).json(user);
   } catch (error) {
    console.log(error);
   }
}

// update user
const uddateUser = async (req, res) => {
    try {
     const { id } = req.params;

     const user = await User.update(req.body, {where: {id: id}});
     res.status(200).json(user);   
    } catch (error) {
        console.log(error);
    }
}

// delete user
const deleteUser = async (req, res) => {
    try {
     const { id } = req.params;
 
     await User.destroy({
         where:{
             id: id,
         }
     })
     res.sendStatus(200);
    } catch (error) {
     console.log(error);
    }
 }

const queryData = async (req, res) => {
        //------create a user ------//

        // const user = await User.create({
        //     "username":"david",
        //     "email":"david@gmail.com",
        //     "password":"david123"
        // });

        // res.status(200).send(user);


        //------Simple SELECT queries------//
        
        // const user = await User.findAll({});
        
        // res.status(200).send(user);

        
        //------Specifying attributes for SELECT queries and Attributes renamed------//
        
        // const user = await User.findAll({
        //     attributes:["username",["email","userEmail"]]
        // });
        
        // res.status(200).send(user);
        
        
        //------find by using where------//

        const user = await User.findAll({
            where:{
                // id:[1,2,3]
            //     username:{
            //         // [Op.eq]: "james"
            //     },
                // [Op.and]: [{ username: "james" }, { email: 'james@gmail.com' }],

            //    [Op.or]: [{ username: "james" }, { email: 'malek@gmail.com' }],
            },
            order:[
                ["id","DESC"]
            ],
            limit: 2,
            offset: 2,

        })
        res.status(200).send(user);
    }

module.exports = {
    createUser,
    getAllUsers,
    getOneUser,
    uddateUser,
    deleteUser,
    queryData,
}