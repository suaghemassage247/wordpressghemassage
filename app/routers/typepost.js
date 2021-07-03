const express =  require ('express');
const path =require('path');
const router = express.Router();
const mongoose = require ('mongoose');
const typepostsController = require('../controllers/admin/typepost');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get('/typepost',typepostsController.typeposts_get_all);
router.get('/typepost/typepost-create',typepostsController.typeposts_add_typepost)
router.post('/typepost/typepost-create',urlencodedParser,typepostsController.typeposts_create_typepost);

router.get('/typepost/:typepostId',typepostsController.typeposts_get_typepost);
router.get('/typepost/edit/:typepostId',typepostsController.typeposts_get_typepost_edit);
router.post('/typepost/edit/:typepostId',urlencodedParser,typepostsController.typeposts_update_typepost_edit);
router.delete('/typepost/:typepostId', typepostsController.typepost_delete);

module.exports = router;
