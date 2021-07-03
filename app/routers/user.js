const express =  require ('express')
const router = express.Router();
const UsersController = require('../controllers/admin/user');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
router.get('/user',UsersController.users_get_all);
router.get('/user/user-create',UsersController.users_add_user);
router.post('/user/user-create',urlencodedParser,UsersController.users_create_user);
router.get('/user/:userId',UsersController.users_get_user);
router.get('/user/edit/:userId',UsersController.users_get_user_edit);
router.post('/user/edit/:userId',urlencodedParser,UsersController.users_update_user_edit);
router.delete("/user/:userId",  UsersController.user_delete);
module.exports = router;
