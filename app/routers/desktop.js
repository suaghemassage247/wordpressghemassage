const express =  require ('express');
const path =require('path');
const router = express.Router();
const mongoose = require ('mongoose');
const desktopController = require('../controllers/admin/desktop');

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
router.get('/desktop',desktopController.desktops_get_all);
router.get('/desktop/desktop-create',desktopController.desktops_add_desktop);
router.post('/desktop/desktop-create',cpUpload,urlencodedParser,desktopController.desktops_create_desktop);
router.get('/desktop/:desktopId',desktopController.desktops_get_desktop);
router.get('/desktop/edit/:desktopId',desktopController.desktops_get_desktop_edit);
router.post('/desktop/edit/:desktopId',cpUpload,urlencodedParser,desktopController.desktops_update_desktop_edit);
router.delete('/desktop/:desktopId',desktopController.desktop_delete);
module.exports = router;
