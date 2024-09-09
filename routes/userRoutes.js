const { createUser,
        getAllUsers, 
        getOneUser, 
        uddateUser, 
        deleteUser,
        queryData,
        finder,
        
} = require("../controllers/userController");
const router = require('express').Router();

// ------ CRUD operation -------//
// router.route('/').post(createUser).get(getAllUsers);
// router.route('/:id').get(getOneUser).put(uddateUser).delete(deleteUser);

// ------ basic querry ------//
// router.get('/queryData', queryData);

// ------ finder ------//
router.get('/finder', finder);



module.exports = router;
