const { createUser,
        getAllUsers, 
        getOneUser, 
        uddateUser, 
        deleteUser,
        queryData,
        finder,
        getterAndSetter,
        RowQuery,
        
} = require("../controllers/userController");
const router = require('express').Router();

// ------ CRUD operation -------//
// router.route('/').post(createUser).get(getAllUsers);
// router.route('/:id').get(getOneUser).put(uddateUser).delete(deleteUser);

// ------ basic querry ------//
// router.get('/queryData', queryData);

// ------ finder ------//
// router.get('/finder', finder);


// ------ Getter and Setter ------//
// for setter
// router.post('/getterAndSetter', getterAndSetter);
// for getter
// router.get('/getterAndSetter', getterAndSetter);


// ------ Row Query ------//
router.get("/rowQuerry", RowQuery)



module.exports = router;
