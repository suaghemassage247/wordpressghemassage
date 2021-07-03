const express =  require ('express')
const router = express.Router();
// const mongoose = require ('mongoose');
const CameraController = require('../controllers/site/camera');
const Camera = require("../models/camera");
var Cart = require('../models/cart');
 var bodyParser = require('body-parser');
 var urlencodedParser = bodyParser.urlencoded({ extended: false })
router.get('/site/camera',CameraController.cameras_get_home);

module.exports = router;
