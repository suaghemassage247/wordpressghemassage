const express =  require ('express');
const path =require('path');
const router = express.Router();
const mongoose = require ('mongoose');
const laptopController = require('../controllers/admin/laptop');

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
var cpUpload = upload.fields([{ name: 'imagedefault', maxCount: 1 }, { name: 'image', maxCount: 10 }])
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
router.get('/laptop',laptopController.laptops_get_all);
router.get('/laptop/laptop-create',laptopController.laptops_add_laptop);
router.post('/laptop/laptop-create',cpUpload,urlencodedParser,laptopController.laptops_create_laptop);
router.get('/laptop/:laptopId',laptopController.laptops_get_laptop);
router.get('/laptop/edit/:laptopId',laptopController.laptops_get_laptop_edit);
router.post('/laptop/edit/:laptopId',cpUpload,urlencodedParser,laptopController.laptops_update_laptop_edit);
router.delete('/laptop/:laptopId',laptopController.laptop_delete);
module.exports = router;
