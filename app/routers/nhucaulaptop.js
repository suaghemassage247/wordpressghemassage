const express =  require ('express');
const path =require('path');
const router = express.Router();
const mongoose = require ('mongoose');
const nhucausController = require('../controllers/admin/nhucaulaptop');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get('/nhucau',nhucausController.nhucaus_get_all);
router.get('/nhucau/nhucau-create',nhucausController.nhucaus_add_nhucau)
router.post('/nhucau/nhucau-create',urlencodedParser,nhucausController.nhucaus_create_nhucau);

router.get('/nhucau/:nhucauId',nhucausController.nhucaus_get_nhucau);
router.get('/nhucau/edit/:nhucauId',nhucausController.nhucaus_get_nhucau_edit);
router.post('/nhucau/edit/:nhucauId',urlencodedParser,nhucausController.nhucaus_update_nhucau_edit);
router.delete('/nhucau/:nhucauId', nhucausController.nhucau_delete);

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
