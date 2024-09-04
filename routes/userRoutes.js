const { createUser,
        getAllUsers, 
        getOneUser, 
        uddateUser, 
        deleteUser
} = require("../controllers/userController");
const router = require('express').Router();

router.route('/').post(createUser).get(getAllUsers);
router.route('/:id').get(getOneUser).put(uddateUser).delete(deleteUser);
// router.post('/', createUser);
// router.get('/', getAllUsers);
// router.get('/:id', getOneUser);

module.exports = router;
