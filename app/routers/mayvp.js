const express =  require ('express');
const path =require('path');
const router = express.Router();
const mongoose = require ('mongoose');
const mayvpsController = require('../controllers/admin/mayvp');

const multer = require ('multer');
const storage = multer.diskStorage({
 destination: function(req,file,cb){
        cb(null,'./public/assest/image');
     },
    filename:function(req,file,cb){
      var originalname = file.originalname;
    filename = originalname;
       cb(null,filename);
    }
  });
const fileFilter = (req,file,cb)=>{
  if (file.mimetype ==='image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/gif'){
  cb(null,true);
  }else{
    cb(null,false);
 }
};

//init upload
const upload = multer({
 storage:storage,
 limits:{fileSize:1024 * 1024 * 5},
 fileFilter:fileFilter
});
var cpUpload = upload.fields([{ name: 'imagedefault', maxCount: 1 }, { name: 'image', maxCount: 8 }])
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
router.get('/mayvp',mayvpsController.mayvps_get_all);
router.get('/mayvp/mayvp-create',mayvpsController.mayvps_add_mayvp);
router.post('/mayvp/mayvp-create',cpUpload,urlencodedParser,mayvpsController.mayvps_create_mayvp);
router.get('/mayvp/:mayvpId',mayvpsController.mayvps_get_mayvp);
router.get('/mayvp/edit/:mayvpId',mayvpsController.mayvps_get_mayvp_edit);
router.post('/mayvp/edit/:mayvpId',cpUpload,urlencodedParser,mayvpsController.mayvps_update_mayvp_edit);
module.exports = router;
