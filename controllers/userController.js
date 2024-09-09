const { Sequelize,where, col, Op, QueryTypes } = require('sequelize');
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

   } catch (errors) {
    console.log(errors.message);
    res.status(400).send(errors.message);
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

const finder = async (req, res) => {


    //-------find all ------//
        // const user = await User.findAll({});
        
        // res.status(200).send(user);


    //-------find by pk  ------//
            // const user = await User.findByPk(1);
            
            // res.status(200).send(user);


    //-------find one  ------//
            // const user = await User.findOne({
            //     where:{
            //         id:5
            //     }
            // });
            
            // res.status(200).send(user);


    //-------find or create  ------//
            // const [user, created] = await User.findOrCreate({
            //     where:{
            //         username:"Thomas"
            //     },
            //     defaults: {
            //         email: 'thomas@gmail.com',
            //         password:"thomas123"
            //     },
            // });
            
            // res.status(200).json({user,created});


    //-------find and count  ------//
            const {count, rows} = await User.findAndCountAll({
                limit:2,
                offset:2
            });
            
            res.status(200).json({count,rows});
}

const getterAndSetter = async (req, res) => {


    //------for setter-----//
        // const user = await User.create({
        //     "username":"daniel",
        //     "email":"daniel",
        //     "password":"daniel123"
        // });

        // res.status(200).send(user);


    //------for getter-----//
        const user = await User.findAll({});

        res.status(200).send(user);


}

const RowQuery = async (req, res) => {
      const user = await db.sequelize.query("Select * from users where username = $username ",
      {
        // replacements: ["james"], //where username = ? 

        // replacements: {username: "james"}, //where username = :username
        
        bind:{username:"james"}, // where username = $username

        type: QueryTypes.SELECT
      })

      res.status(200).send(user)
}

module.exports = {
    createUser,
    getAllUsers,
    getOneUser,
    uddateUser,
    deleteUser,
    queryData,
    finder,
    getterAndSetter,
    RowQuery,
}