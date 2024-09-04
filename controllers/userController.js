const { where } = require('sequelize');
const db = require('../models/index');

// create main model
const User = db.users;

// main work

// 1st work create user
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

// 2nd work find all user
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

// 3rd get one user
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

// 4th update user
const uddateUser = async (req, res) => {
    try {
     const { id } = req.params;

     const user = await User.update(req.body, {where: {id: id}});
     res.status(200).json(user);   
    } catch (error) {
        console.log(error);
    }
}

// 5th delete user
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

module.exports = {
    createUser,
    getAllUsers,
    getOneUser,
    uddateUser,
    deleteUser,
}