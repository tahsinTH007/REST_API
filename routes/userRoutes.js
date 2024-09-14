const { createUser,
        getAllUsers, 
        getOneUser, 
        uddateUser, 
        deleteUser,
        queryData,
        finder,
        getterAndSetter,
        RowQuery,
        create,
        associations,
        paranoid,
        polymorphic,
        
} = require("../controllers/userController");
const router = require('express').Router();

// ------ CRUD operation -------//
// router.route('/').post(createUser).get(getAllUsers);
// router.route('/:id').get(getOneUser).put(uddateUser).delete(deleteUser);

//----To create something----//
router.post("/create", create)

// ------ basic querry ------//
router.get('/queryData', queryData);

// ------ finder ------//
router.get('/finder', finder);


// ------ Getter and Setter ------//
// for setter
router.post('/getterAndSetter', getterAndSetter);
// for getter
router.get('/getterAndSetter', getterAndSetter);


// ------ Row Query ------//
router.get("/rowQuerry", RowQuery);


//--------Associations -----///
router.get("/associations", associations);


//--------Paranoid -----///
router.get("/paranoid", paranoid);


//---------Polymorphic Association-------//
router.get("/polymorphic",polymorphic);

module.exports = router;
