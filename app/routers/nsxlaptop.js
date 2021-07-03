const express =  require ('express');
const path =require('path');
const router = express.Router();
const mongoose = require ('mongoose');
const nsxlaptopsController = require('../controllers/admin/nsxlaptop');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get('/nsxlaptop',nsxlaptopsController.nsxs_get_all);
router.get('/nsxlaptop/nsx-create',nsxlaptopsController.nsxs_add_nsx)
router.post('/nsxlaptop/nsx-create',urlencodedParser,nsxlaptopsController.nsxs_create_nsx);

router.get('/nsxlaptop/:nsxId',nsxlaptopsController.nsxs_get_nsx);
router.get('/nsxlaptop/edit/:nsxId',nsxlaptopsController.nsxs_get_nsx_edit);
router.post('/nsxlaptop/edit/:nsxId',urlencodedParser,nsxlaptopsController.nsxs_update_nsx_edit);
router.delete('/nsxlaptop/:nsxId', nsxlaptopsController.nsx_delete);

module.exports = router;
//const multer = require ('multer');
//const storage = multer.diskStorage({
// destination: function(req,file,cb){
//        cb(null,'./public/assest/image');
//      },
  //    filename:function(req,file,cb){
  //      var originalname = file.originalname;
  //     filename = originalname;
  //      cb(null,filename);
  //    }
//  });
//const fileFilter = (req,file,cb)=>{
//  if (file.mimetype ==='image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/gif'){
//    cb(null,true);
//  }else{
  //  cb(null,false);
//  }
//};

//init upload
//const upload = multer({
//c  storage:storage,
//c  limits:{fileSize:1024 * 1024 * 5},
//c  fileFilter:fileFilter
//c});
//cvar cpUpload = upload.fields([{ name: 'imagedefault', maxCount: 1 }, { name: 'image', maxCount: 8 }])
