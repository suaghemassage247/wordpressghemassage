const express =  require ('express')
const router = express.Router();
const DanhmucController = require('../controllers/site/trangchu');
const Danhmuc = require("../models/danhmuc");
var Cart = require('../models/cart');
 var bodyParser = require('body-parser');
 var urlencodedParser = bodyParser.urlencoded({ extended: false })
router.get('/',DanhmucController.trangchu_get_home);

module.exports = router;
