const express =  require ('express');
const path =require('path');
const router = express.Router();
const mongoose = require ('mongoose');
const phanloaisController = require('../controllers/admin/phanloai');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get('/phanloai',phanloaisController.phanloais_get_all);
router.get('/phanloai/phanloai-create',phanloaisController.phanloais_add_phanloai)
router.post('/phanloai/phanloai-create',urlencodedParser,phanloaisController.phanloais_create_phanloai);

router.get('/phanloai/:phanloaiId',phanloaisController.phanloais_get_phanloai);
router.get('/phanloai/edit/:phanloaiId',phanloaisController.phanloais_get_phanloai_edit);
router.post('/phanloai/edit/:phanloaiId',urlencodedParser,phanloaisController.phanloais_update_phanloai_edit);
router.delete('/phanloai/:phanloaiId', phanloaisController.phanloai_delete);

module.exports = router;
