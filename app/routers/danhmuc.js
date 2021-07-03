const express =  require ('express');
const path =require('path');
const router = express.Router();
const mongoose = require ('mongoose');
const danhmucController = require('../controllers/admin/danhmuc');

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
var cpUpload = upload.fields([{ name: 'image', maxCount: 8 }])
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
router.get('/danhmuc',danhmucController.danhmucs_get_all);
router.get('/danhmuc/danhmuc-create',danhmucController.danhmucs_add_danhmuc);
router.post('/danhmuc/danhmuc-create',cpUpload,urlencodedParser,danhmucController.danhmucs_create_danhmuc);
router.get('/danhmuc/:danhmucId',danhmucController.danhmucs_get_danhmuc);
router.get('/danhmuc/edit/:danhmucId',danhmucController.danhmucs_get_danhmuc_edit);
router.post('/danhmuc/edit/:danhmucId',cpUpload,urlencodedParser,danhmucController.danhmucs_update_danhmuc_edit);
router.delete('/danhmuc/:danhmucId',danhmucController.danhmuc_delete);
module.exports = router;
