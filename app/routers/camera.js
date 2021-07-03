const express =  require ('express');
const path =require('path');
const router = express.Router();
const mongoose = require ('mongoose');
const cameraController = require('../controllers/admin/camera');

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
router.get('/camera',cameraController.cameras_get_all);
router.get('/camera/camera-create',cameraController.cameras_add_camera);
router.post('/camera/camera-create',cpUpload,urlencodedParser,cameraController.cameras_create_camera);
router.get('/camera/:cameraId',cameraController.cameras_get_camera);
router.get('/camera/edit/:cameraId',cameraController.cameras_get_camera_edit);
router.post('/camera/edit/:cameraId',cpUpload,urlencodedParser,cameraController.cameras_update_camera_edit);
router.delete('/camera/:cameraId',cameraController.camera_delete);
module.exports = router;
